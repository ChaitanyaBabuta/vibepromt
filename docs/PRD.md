# Product Requirements Document

> **Scope note:** This document describes only what is implemented in this repository: baseline commit `c43745b` (branch `saksham-changes`) plus the uncommitted UI redesign in the working tree. It was derived by reading the source, not the README. Anything that could not be established from the code is marked **Unknown / Not determinable from the current codebase**. Statements marked *verified in a browser* were checked by rendering the app headlessly; everything else is from the code.

---

## 1. Product Overview

**What it is.** VibePrompt is a single-page web application that hosts a curated, read-mostly library of long-form "system prompts" for AI code-generation tools (v0, Cursor, Bolt.new, Claude, Windsurf). Each library entry is a full, hand-written prompt describing a web UI to build (dashboards, landing pages, AI agent consoles, e-commerce storefronts, FinTech workspaces, etc.), together with metadata: category, design style, tech stack, target tools, author handle, like/copy counts and a color theme.

The product ships **102 prompts** (`src/data/promptsBatch1.ts` … `promptsBatch7.ts`, aggregated in `src/data/promptsData.ts`). Prompt bodies are typically 1–3 KB of structured natural language.

**What problem it solves.** Users who "vibe code" UIs with AI tools need high-quality, detailed prompts rather than one-line requests. VibePrompt gives them (a) a browsable/searchable catalogue of ready prompts to copy into their AI tool, and (b) a builder that assembles a new prompt from a configuration form, optionally rewritten by Google Gemini.

**Core purpose (as implemented).** Browse → filter/search → copy prompt text to clipboard. Secondarily: configure/generate a prompt, and save user-authored prompts into browser-local storage.

**What it is not.** There is no backend database, no user accounts on a server, no sharing, no multi-user state. All user data lives in `localStorage`. The only server-side logic is one Gemini proxy endpoint (`server.ts`).

**Presentation.** The UI was redesigned as a restrained, neutral developer-tool interface with first-class light and dark themes driven by a single set of semantic tokens (`src/index.css`). The earlier "macOS Prompt Manager" framing — window chrome, traffic-light dots, gradient hero and multi-colour accent palette — has been removed; there is no desktop app or native integration in the repository.

---

## 2. Users / Actors

The code supports exactly one functional role. There is no permission model.

| Actor | How it exists in code | Capabilities |
|---|---|---|
| **Anonymous visitor** | Default state; `AuthContext.user === null` | Full access: browse, search, filter, sort, favorite, copy, open the builder, call `/api/enhance-prompt`, submit a prompt to local storage |
| **"Signed-in" visitor** | `src/contexts/AuthContext.tsx`, persisted under `localStorage['vibeprompt_auth_user']` | Exactly the same capabilities as anonymous, plus a name/avatar/email shown in the header dropdown and a Sign Out action |
| **Prompt author (library content)** | `author: { name, handle, avatar }` on each `UIPrompt` | Not an actor — a display-only data field. Only `author.handle` is rendered (`PromptCard.tsx`). No authoring identity is enforced anywhere |
| **Operator / deployer** | `GEMINI_API_KEY` env var consumed in `server.ts` | Supplies the Gemini key that enables AI refinement |

**No feature in the codebase is gated on being signed in.** Favorites and submissions work identically when signed out. The sign-in modal previously promised "save prompts, sync favorites, and unlock premium features", none of which exists; the redesign replaced that copy with a factual "Continue with a provider or your email address."

---

## 3. Core Features

Status legend: **Implemented** · **Partially implemented** · **Referenced but not implemented** · **Unknown**. Two components that were previously **Broken** (the detail view and the submit modal) were repaired during the UI redesign — see 3.6 and 3.9.

### 3.1 Prompt library grid
- **Purpose:** Browse the 102 bundled prompts.
- **User behavior:** Lands on the library tab; sees a responsive card grid, 18 cards per page.
- **Expected behavior:** Cards show category badge, favorite heart, title, 2-line description, author handle, and a copy button labeled with the copy count. Clicking a card opens the detail view; clicking copy writes `fullPrompt` to the clipboard and increments the in-memory copy count.
- **Implementation:** `src/components/PromptGrid.tsx`, `src/components/PromptCard.tsx`.
- **Status:** **Implemented.** Cards additionally show up to two tech-stack tags with an overflow count, and are keyboard-operable (`Enter`/`Space`).

### 3.2 Search, filtering, sorting, pagination
- **Purpose:** Narrow 102 prompts down.
- **Behavior:** Three search inputs exist (header — `lg` and wider only, grid, all-prompts modal). The header and grid inputs share App-level `searchQuery` state; the modal keeps its own. Search is a case-insensitive substring match over title, description, `fullPrompt` and tech-stack entries (`PromptGrid.tsx:70-79`); the modal additionally matches category and style (`AllPromptsModal.tsx:98-109`).
- Category filter pills, a target-tool filter (`All | v0 | Cursor | Bolt.new | Claude | Windsurf`), and sort (`popular` = likes desc, `copies` desc, `newest` by `createdAt`).
- Pagination: 18 per page in the grid / 20 in the modal, "Load More", "Show All", a progress bar, and an `IntersectionObserver` sentinel that auto-loads on scroll.
- **Status:** **Implemented.** Two data gaps found during the audit were closed in the redesign: `FinTech` (16 prompts) is now present in every category filter list and in the categories view, and the `Dark Mode` / `Minimalist` chips — which no bundled prompt could ever match — were removed from the all-prompts modal. Verified in a browser: the FinTech filter returns 16 results.

### 3.3 Favorites ("Saved")
- **Purpose:** Bookmark prompts.
- **Behavior:** Heart toggles on the card and in the detail header. Count badge in the header nav. The `favorites` tab and the `Favorites` filter chip show only favorited prompts.
- **Implementation:** `App.tsx:33-71`, persisted as an array of prompt IDs in `localStorage['vibeprompt_favorites']`.
- **Status:** **Implemented** (local, per-browser, no auth requirement).

### 3.4 Categories overview
- **Purpose:** Browse by UI archetype with live counts.
- **Behavior:** Ten hard-coded cards (Dashboard, Landing Page, SaaS, AI Agent UI, Bento Grid, E-commerce, Mobile App, Portfolio, Analytics, FinTech) each with an icon, blurb, and a count computed from the loaded prompts. Clicking one filters the library and scrolls down.
- **Implementation:** `src/components/CategoriesSection.tsx`.
- **Status:** **Implemented.** Coverage now matches the data: every category present in the catalogue has a card.

### 3.5 Hero showcase carousel
- **Purpose:** Highlight the first 8 prompts.
- **Behavior:** A 3D-ish circular carousel (max 5 visible cards) with autoplay every 3.6 s, pause on hover/focus, prev/next buttons, dot indicators, arrow-key navigation when focused, and a large index watermark behind the active card (the "N / M" counter now sits in the panel header). The arc radius adapts to the container width so neighbouring cards stay on screen down to 320 px. Clicking the active card opens the detail view; the panel action bar copies or opens the active prompt.
- **Implementation:** `src/components/ui/circular-carousel.tsx`, wired in `src/components/Hero.tsx`.
- **Status:** **Implemented**. Note the carousel always shows `prompts.slice(0, 8)` — it is not "featured"-aware, even though 20 prompts carry `isFeatured: true` (that flag is read nowhere).

### 3.6 Prompt detail view
- **Purpose:** Full-screen reading + copying of a single prompt, with tabs for the prompt body, usage tips, and included modules, plus a spec sidebar.
- **Implementation:** `src/components/PromptDetailModal.tsx` (406 lines).
- **Status:** **Implemented.** This component was previously broken: it read `prompt.promptText`, `prompt.tags`, `prompt.targetTool` and `prompt.complexity`, none of which exist on `UIPrompt`, so it threw a `TypeError` on render and every "open a prompt" path crashed. During the UI redesign it was rewritten against the real schema (`fullPrompt`, `componentsIncluded`, `targetTools`; `complexity` has no source and was dropped) and `App.tsx` now passes `onCopyPrompt`, so copying from the detail view also increments the counter. Verified in a browser: the view renders in both themes with no console errors, and its Copy action writes the full prompt (1,433 chars for the first card) to the clipboard.
- Tabs are **System prompt** (the prompt body), **Usage** (workflow steps) and **Components** (from `componentsIncluded`). The sidebar shows category, design style, colour theme, publish date and prompt length, plus the tech stack and a copy / open-in-builder panel.

### 3.7 Prompt Builder
- **Purpose:** Assemble a new prompt from a configuration form and optionally have Gemini rewrite it.
- **Behavior:** Pick target tool, interface type (8 options), design style (6 options), toggle tech-stack chips (6) and component chips (8). A live-templated prompt renders in a `<pre>`. Actions: Copy (clipboard), AI Refine (`POST /api/enhance-prompt`), Save (adds to the local library), Preview (opens the detail view).
- **Implementation:** `src/components/PromptBuilder.tsx`.
- **Status:** **Partially implemented.**
  - Implemented: template generation, chip/select state, copy, save, AI refine with a local fallback.
  - `config.colorTheme` and `config.customInstructions` are seeded with defaults and injected into the prompt text, but **no UI control exists to edit them**. The `COLOR_THEMES` array (lines 53-58) is declared and never used.
  - The builder now surfaces an inline notice when AI refinement fails (both the non-2xx and network-failure paths), instead of silently substituting a fallback.
  - Any field edit clears a previous AI refinement (`setEnhancedTextOverride(null)`), which is deliberate.

### 3.8 AI prompt refinement (Gemini)
- **Purpose:** Turn the builder config into a longer, better-structured prompt.
- **Behavior:** `POST /api/enhance-prompt` with the builder config; the server composes a meta-prompt ("You are an expert AI Vibe Coding Prompt Architect…"), calls `gemini-2.5-flash`, and returns `{ enhancedPrompt }`. The client replaces the preview text with the result.
- **Implementation:** `server.ts:14-58`, client call at `PromptBuilder.tsx:113-143`.
- **Status:** **Implemented**, conditional on `GEMINI_API_KEY`. Without the key the endpoint returns HTTP 400 and the client silently substitutes a hard-coded local "enhanced" template instead of showing an error (`PromptBuilder.tsx:127-137`). A network/transport failure is only `console.error`ed — the button stops spinning and nothing visibly changes.

### 3.9 Submit a prompt
- **Purpose:** Let a user add their own prompt to the library.
- **Behavior:** Modal form: title*, category, design style, description, full prompt text*, tech stack (comma-separated), author name. On submit, a `UIPrompt` is built with `id: user-submitted-<timestamp>`, `likes: 1`, `copies: 0`, today's date, prepended to the list, and persisted to `localStorage`.
- **Implementation:** `src/components/SubmitPromptModal.tsx`.
- **Status:** **Implemented.** Previously the early `if (!isOpen) return null;` sat *above* all ten `useState` calls — a Rules-of-Hooks violation that made React throw when the modal opened. The early return now sits below the hooks, and the form gained controls for the two fields that already fed the saved object but had no UI (`targetTool` and `componentsIncluded`), so submissions are no longer forced to `targetTools: ['v0']` and a default component list. Verified in a browser: the modal opens and renders in both themes with no console errors. *(Static-analysis finding; not browser-verified in this pass.)*
- "Publish Prompt" and the "Submitted!" confirmation are purely local — nothing is uploaded anywhere.

### 3.10 All-prompts full-screen modal
- **Purpose:** A denser, 4-column browse surface with its own search/filter/sort/pagination and ESC-to-close.
- **Implementation:** `src/components/AllPromptsModal.tsx`. Opened from the header ("View All"), the hero, and the grid.
- **Status:** **Implemented** (largely duplicates `PromptGrid` logic).

### 3.11 Authentication UI
- **Purpose:** Sign in with GitHub, Google, or email/password.
- **Behavior:** `signIn()` waits 1200 ms and then fabricates a user locally: GitHub → "Alex Mercer / alex@github.com", Google → "Sarah Chen / sarah@google.com", email → name derived from the local part of the address. Avatars are generated as inline SVG data URIs. The user object is stored in `localStorage`.
- **Implementation:** `src/contexts/AuthContext.tsx`, `src/components/SignInModal.tsx`, header dropdown in `src/components/Header.tsx`.
- **Status:** **Mock only — no real authentication.** No OAuth flow, no network call, no token, no password check (the password field is required by the form but never used). See §7.
- Inside the dropdown/modal: "My Profile" and "Sign Up" are buttons with no handler — **Referenced but not implemented**.

### 3.12 Keyboard shortcuts
- **Status:** **Not implemented, and no longer advertised.** The old UI displayed `⌘K`, `⌘N` and `⌘⇧V` hints for shortcuts that had no handlers; the redesign removed those misleading affordances. Real keyboard support: `Escape` closes `PromptDetailModal`, `AllPromptsModal` and `SubmitPromptModal`; `Escape` also closes the header profile and theme menus; `ArrowLeft`/`ArrowRight` move the focused carousel; prompt cards are focusable and respond to `Enter`/`Space`.

### 3.13 Interactive UI previews
- `src/components/InteractiveUIPreview.tsx` (237 lines) renders mock analytics/AI-chat/landing/e-commerce widgets driven by `prompt.previewLayout`.
- **Status:** **Dead code.** Nothing imports it, so `UIPrompt.previewLayout` is still never read by the running app. Its styling was migrated to the design tokens during the redesign so the file does not carry the old colour system, but it remains unreachable.

### 3.14 Theme switching (light / dark / system)
- **Purpose:** Let users choose a light or dark interface, or follow the OS.
- **User behaviour:** A control in the header toggles light↔dark on click; its caret opens a menu with **Light**, **Dark** and **System** (the active option is checked).
- **Expected behaviour:** The choice applies immediately, persists across reloads, and in System mode follows OS changes live. A pre-paint script in `index.html` applies the stored theme before first render so there is no flash of the wrong theme.
- **Implementation:** `src/contexts/ThemeContext.tsx` (provider, `matchMedia` listener, persistence), `src/components/ThemeToggle.tsx` (control), token definitions in `src/index.css`. Persisted under `localStorage['vibeprompt_theme']`.
- **Status:** **Implemented.** Verified in a browser: toggle light↔dark, System selection, and persistence across reload all behave correctly, and every view passes WCAG AA text contrast in both themes.

### 3.15 Not present at all
No backend persistence, no user-to-user sharing, no likes-writing (likes are read-only display data), no comments, no analytics/telemetry, no i18n, no tests, no CI, no Docker/deployment manifests.

---

## 4. User Flows

### 4.1 Browse and copy a prompt (the primary flow — works)
1. Load `/`. `App.tsx` hydrates `prompts` from `INITIAL_PROMPTS` merged with any custom prompts in `localStorage`, and `favorites` from `localStorage`.
2. Hero renders with the carousel of the first 8 prompts; the grid below shows 18 cards sorted by likes.
3. User types in the header or grid search box and/or clicks a category pill, tool filter, or sort option; the list re-filters and pagination resets to page 1.
4. User clicks **Copy** on a card → `navigator.clipboard.writeText(prompt.fullPrompt)`, the button flips to "Copied" for 2 s, and `copies` is incremented in App state (persisted, but overwritten by the bundled value for built-in prompts on the next reload — see §9).
5. User pastes into v0/Cursor/etc. outside the app.

### 4.2 Open a prompt's detail page
1. User clicks a card body (or presses `Enter`/`Space` on it), the active carousel card, or builder → Preview.
2. `App.setSelectedPromptModal(prompt)` → `PromptDetailModal` renders full screen with the prompt body, usage tips, components and a spec sidebar.
3. Copy writes `fullPrompt` to the clipboard and increments the counter; Save toggles the favourite; "Open builder" switches to the builder view; `Esc` or Back closes.

### 4.3 Build a prompt with AI refinement
1. Header → **Builder** (or hero → builder; note `Hero`'s `onOpenBuilder` prop is passed but never wired to a control).
2. User configures tool/interface/style/tech/components; the right pane shows the templated prompt live.
3. **AI Refine** → `POST /api/enhance-prompt` with the whole `PromptBuilderConfig`.
   - Key present → Gemini `gemini-2.5-flash` returns text → replaces the preview.
   - Key absent (HTTP 400) → client swaps in a local fallback template, no error surfaced.
   - Fetch throws → `console.error` only.
4. **Copy** → clipboard. **Save** → prepended to the library and persisted locally. **Preview** → opens the detail view for the generated prompt.

### 4.4 Favorite / unfavorite
Click any heart → `favorites` array toggles → `useEffect` writes `localStorage['vibeprompt_favorites']` → header badge count, `Saved` tab, and `Favorites` chip all update. No sign-in required.

### 4.5 Submit a prompt
Header → **Submit Prompt** (or All-Prompts modal → Submit) → modal form → Publish → prompt prepended locally, "Submitted!" for 1.5 s, modal closes. Subject to the hooks defect in §3.9.

### 4.6 Sign in / sign out
Header → **Sign In** → modal → GitHub / Google / email+password → 1.2 s simulated delay → fabricated user stored locally → success overlay 1.5 s → modal closes → header shows avatar + name. Dropdown → Sign Out clears state and the `localStorage` entry. Nothing else in the app changes.

---

## 5. Functional Requirements

Derived from existing behavior; IDs are for reference only.

**Library & data**
- FR-1 The app SHALL load its prompt catalogue from static TypeScript modules bundled at build time (`src/data/promptsData.ts`, 102 entries). No network fetch is involved.
- FR-2 On startup the app SHALL merge bundled prompts with locally stored prompts, discarding stored entries whose `id` matches a bundled prompt (`App.tsx:18-31`).
- FR-3 Every prompt SHALL expose: `id`, `title`, `description`, `fullPrompt`, `category`, `style`, `techStack[]`, `targetTools[]`, `author{name,handle,avatar}`, `likes`, `copies`, `createdAt`, `componentsIncluded[]`, `colorTheme`, `previewLayout`; `isFeatured` is optional.

**Browsing**
- FR-4 Search SHALL be case-insensitive substring matching over title, description, `fullPrompt`, and tech stack (plus category and style in the all-prompts modal).
- FR-5 Category filtering SHALL be exact equality against `prompt.category`, except the pseudo-category `Favorites`, which filters by the favorites ID list.
- FR-6 Tool filtering SHALL pass a prompt only if `targetTools` contains the selected tool.
- FR-7 Sorting SHALL support likes desc ("Popular"), copies desc ("Copied"), and `createdAt` desc ("Newest").
- FR-8 The grid SHALL show 18 items initially and the all-prompts modal 20, extendable by "Load More", "Show All", or scroll-triggered auto-load; changing any filter/search/sort SHALL reset the visible count.

**Copying**
- FR-9 Copying SHALL write the prompt's `fullPrompt` (or the builder's active text) to the system clipboard via `navigator.clipboard.writeText`, show a 2-second confirmation, and increment the in-memory `copies` counter.

**Favorites**
- FR-10 Favorites SHALL be stored as an array of prompt IDs in `localStorage['vibeprompt_favorites']` and SHALL persist across reloads without authentication.

**Builder**
- FR-11 The builder SHALL render a prompt string from the current config on every change.
- FR-12 `POST /api/enhance-prompt` SHALL accept `{interfaceType, designStyle, techStack, components, colorTheme, customInstructions, targetTool}` (all optional; the server substitutes defaults for missing values) and return `{ enhancedPrompt: string }`.
- FR-13 If `GEMINI_API_KEY` is unset the endpoint SHALL return HTTP 400 `{ error: "GEMINI_API_KEY is not configured." }`; on any other failure HTTP 500 `{ error }`.
- FR-14 Saving from the builder SHALL create a prompt with `id: custom-builder-<Date.now()>` and prepend it to the library.

**Submission**
- FR-15 Submission SHALL require non-empty title and full prompt text, split tech stack on commas, default the author to "Community Vibe Coder", and create `id: user-submitted-<Date.now()>`.

**Persistence**
- FR-16 The full prompt array SHALL be serialized to `localStorage['vibeprompt_prompts']` on every change; all `localStorage` reads/writes SHALL be wrapped in try/catch and failures logged, never thrown.

**Auth (as built)**
- FR-17 `signIn(provider, email?, password?)` SHALL fabricate a local user after a 1200 ms delay and store it in `localStorage['vibeprompt_auth_user']`; `signOut()` SHALL clear both.
- FR-18 No feature SHALL be gated on authentication state.

**Theming**
- FR-20 The app SHALL support `light`, `dark` and `system` modes, persist the selection in `localStorage['vibeprompt_theme']`, and apply it by toggling the `dark` class and `color-scheme` on `<html>`.
- FR-21 In `system` mode the app SHALL follow `prefers-color-scheme` changes at runtime via a `matchMedia` listener.
- FR-22 The stored theme SHALL be applied before first paint by an inline script in `index.html`, so no flash of the wrong theme occurs.
- FR-23 All components SHALL derive colour from the semantic tokens in `src/index.css`; no component may hardcode a palette colour.

**Serving**
- FR-19 In non-production the server SHALL mount Vite in middleware mode (SPA); in production it SHALL serve `dist/` statically and fall back to `dist/index.html` for all unmatched routes. Port is fixed at 3000, bound to `0.0.0.0`.

---

## 6. Non-Functional Requirements

Only what the repo actually establishes.

- **Client-side rendering.** Vite + React 19 SPA, no SSR, no routing library; view switching is `activeTab` state in `App.tsx`. There are no URL routes for prompts — nothing is linkable or bookmarkable, and browser back/forward does not navigate the app.
- **Bundle size.** A production build emits a single ~634 KB JS chunk (~193 KB gzip) and ~125 KB CSS (~17 KB gzip); Vite warns about the >500 KB chunk. The prompt corpus alone is ~184 KB of JSON-equivalent text embedded in the bundle. No code splitting or lazy loading is configured.
- **Client storage footprint.** Every prompt-array mutation rewrites ~184 KB+ to `localStorage`, well within typical 5–10 MB quotas but not trivial; the write happens on every copy-count increment.
- **Styling / theming.** Tailwind CSS v4 via `@tailwindcss/vite`. Colour, radius, elevation and type are defined once as CSS custom properties in `src/index.css` and exposed as Tailwind utilities through `@theme inline`; the `.dark` class on `<html>` swaps the palette. Google Fonts (Plus Jakarta Sans, JetBrains Mono) are loaded from `fonts.googleapis.com` in `index.html` — an external runtime dependency. Text contrast was measured in a browser across all seven views in both themes and meets WCAG AA.
- **Accessibility.** Improved but still incomplete. Every interactive element has a visible `focus-visible` ring driven by the `ring` token; prompt cards are `role="button"` with `tabIndex` and `Enter`/`Space` handling; icon-only controls carry `aria-label`; modals declare `role="dialog"` + `aria-modal`, close on `Esc` and lock body scroll; menus use `role="menu"`/`menuitemradio` with `aria-expanded`; tabs use `role="tab"`/`aria-selected`; the progress bars expose `role="progressbar"` values. Still missing: focus trapping and focus restoration in modals, and a global error boundary. Text contrast passes WCAG AA in both themes (verified by measuring rendered colours, not by inspection).
- **Responsiveness.** Verified with no horizontal overflow at every width from 320 px to 1680 px on all seven views. Primary navigation is inline at `lg` and above and moves to a dedicated scrollable row below that (the old UI had no navigation at all below `md`). The card grid steps 1 → 2 → 3 → 4 columns, the builder and detail view collapse to a single column, and the carousel arc shrinks with its container.
- **Security posture.** The Gemini key stays server-side and is never sent to the browser — the only correct security decision required here. There is no auth, no CORS configuration, no rate limiting, no input validation, and no request size limit beyond Express's `express.json()` default (100 KB) on the single POST endpoint.
- **Type safety.** `tsconfig.json` has no `strict`, and `@types/react`/`@types/react-dom` are absent, so React props are effectively `any` and `npm run lint` (`tsc --noEmit`) passes despite real schema mismatches (§3.6).
- **Observability.** `console.log`/`console.error` only. No structured logging, metrics, or error reporting.
- **Availability / scaling / performance targets.** **Unknown / Not determinable from the current codebase.**

---

## 7. Authentication & Authorization

**Authentication is simulated end-to-end. There is no identity provider, no server-side session, and no credential verification anywhere in the repository.**

- Implementation: `src/contexts/AuthContext.tsx` (React context, wrapped around `<App/>` in `src/main.tsx`).
- `signIn(provider, email?, password?)` sleeps 1200 ms via `setTimeout` and constructs a `User` object locally:
  - `github` → hard-coded "Alex Mercer / alex@github.com"
  - `google` → hard-coded "Sarah Chen / sarah@google.com"
  - anything else → `email` provider, display name = local part of the email; the submitted **password is ignored entirely**
- `id` is `Math.random().toString(36).substring(2, 9)` — not cryptographically meaningful and not unique-by-construction.
- The avatar is a generated inline SVG data URI with the user's initials (`generateAvatarUrl`).
- Persistence: `localStorage['vibeprompt_auth_user']`, restored on mount. Any user can forge this value by editing local storage; there is nothing to forge *into*, since nothing is protected.
- `useAuth()` throws if used outside `AuthProvider`.

**Authorization:** none. There are no roles, no scopes, no protected views, and no server-side checks. `POST /api/enhance-prompt` is fully unauthenticated and callable by anyone who can reach the server — with the operator's Gemini key paying for it.

---

## 8. Integrations

| Integration | Where | How it is used | Status |
|---|---|---|---|
| **Google Gemini** (`@google/genai` ^2.4.0) | `server.ts` | Server-side only. `new GoogleGenAI({ apiKey })` → `ai.models.generateContent({ model: "gemini-2.5-flash", contents: promptText })`. Response read from `response.text`. | Implemented; requires `GEMINI_API_KEY` |
| **Google Fonts** | `index.html` | `preconnect` + stylesheet for Instrument Serif, Plus Jakarta Sans, JetBrains Mono | Implemented |
| **Unsplash** | Hard-coded author avatar URLs in the prompt data and in the builder/submit creation paths | Remote images; note these URLs are never actually rendered — no component displays `author.avatar` | Present but unused at render time |
| **Google AI Studio** | `metadata.json` (`majorCapabilities: ["MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API"]`), `.env.example` comments, README link, `.antigravity/*.pbtxt` session log | The project was scaffolded as an AI Studio applet; the platform is documented as injecting `GEMINI_API_KEY` and `APP_URL` at runtime | Platform context, not app code |
| **Clipboard API** | `PromptCard`, `PromptBuilder`, `Hero` | `navigator.clipboard.writeText`, no fallback and no rejection handling (requires a secure context) | Implemented |

`APP_URL` is documented in `.env.example` but **read nowhere in the code**.

---

## 9. Constraints & Limitations

1. **Single-browser, single-device.** All state (favorites, custom prompts, "session") is `localStorage`. Clearing site data destroys everything; nothing is shared between browsers or users.
2. **No real accounts.** §7. The sign-in modal's promises (sync, premium) are not backed by code.
3. **Copy counts on bundled prompts are effectively volatile.** They increment and are written to `localStorage`, but the load path rebuilds built-in prompts from `INITIAL_PROMPTS` and keeps only *custom* entries from storage, so increments on the 102 bundled prompts are discarded on reload. Likes are static data and can never change.
4. **No deep links.** No router; a prompt cannot be linked to, and refreshing always returns to the library tab.
5. **Content is not editable or deletable.** There is no edit, delete, or moderation path for user-submitted or builder-saved prompts once created.
6. **Unauthenticated, unthrottled AI endpoint** billed to the operator's key.
7. **Partly silent failure modes.** A missing API key still results in a locally generated fallback prompt rather than a hard error, but the builder now surfaces an inline notice for both failure modes (non-2xx response and network failure). Clipboard rejections are still swallowed to the console, and there is no global error boundary.
8. **Type checking is not protective.** Missing React type packages + non-strict `tsconfig` mean `npm run lint` cannot catch the class of bug in §3.6.
9. **Dead code and duplication.** `InteractiveUIPreview.tsx` (unused), `components/ui/circular-carousel.tsx` (unused re-export shim), `Hero`'s `searchQuery` / `setSearchQuery` / `selectedCategory` / `setSelectedCategory` props (still unused), the `motion` dependency (only `framer-motion` is imported), and both `bun.lock` and `package-lock.json` committed. The redesign put `COLOR_THEMES`, `Hero.onOpenBuilder` and `App.handleOpenBuilderWithPrompt` to work, so those are no longer dead.
10. **No tests, no CI, no deployment manifests** in the repository.
11. **Fixed port 3000, bound to `0.0.0.0`,** not configurable via env.
12. **Repository weight.** A 33 MB agent-session transcript (`.antigravity/*.pbtxt`) is committed.

---

## 10. Current State

**Working today**
- Browsing, searching, filtering (category/tool), sorting, paginated + infinite-scroll loading of 102 bundled prompts.
- Copy-to-clipboard from prompt cards, the hero carousel, and the builder.
- Favorites with local persistence; "Saved" tab and `Favorites` filter.
- Categories overview with live counts (9 of the 10 categories present in the data).
- Hero circular carousel with autoplay, keyboard and dot navigation.
- Full-screen all-prompts modal with independent search/filter/sort/pagination and ESC-to-close.
- Prompt Builder template generation, copy, and save-to-local-library.
- Gemini-backed AI refinement via `POST /api/enhance-prompt` when `GEMINI_API_KEY` is configured, with a graceful (if silent) client-side fallback when it is not.
- Dev and production server modes; production build succeeds.

**Repaired during the UI redesign**
- Prompt detail view (§3.6) — was crashing on every "open a prompt" path; now renders against the real schema.
- Submit-prompt modal (§3.9) — Rules-of-Hooks violation fixed; the target-tool and components fields now have UI.
- `FinTech` reachable from the category filters and the categories view; impossible `Dark Mode` / `Minimalist` chips removed.

**Added by the UI redesign**
- Light / dark / system theming with persistence and a header control (§3.14).
- A shared design-token system and component primitives (`src/index.css`, `src/components/ui/primitives.tsx`).
- Navigation on tablet and mobile, which previously had none below `md`.
- An inline error notice for failed AI refinement, plus standardised empty and loading states.

**Mock / cosmetic only**
- Authentication and the entire signed-in experience; "My Profile" and "Sign Up" buttons remain no-ops.

**Dead or unused**
- `InteractiveUIPreview.tsx` and therefore `previewLayout`; `isFeatured`; `author.name` / `author.avatar`; `componentsIncluded` and `colorTheme` on stored prompts (written, never read); the root `components/ui/circular-carousel.tsx` re-export shim; `COLOR_THEMES`; the `motion` package; `APP_URL`.

**Absent**
- Server-side persistence, real auth, sharing, editing/deleting prompts, error UI, routing/deep links, tests, CI, deployment configuration, observability.
