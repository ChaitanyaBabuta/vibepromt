import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API endpoint for AI prompt enhancement using Gemini
app.post("/api/enhance-prompt", async (req, res) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(400).json({
        error: "GEMINI_API_KEY is not configured.",
      });
    }

    const { interfaceType, designStyle, techStack, components, colorTheme, customInstructions, targetTool } = req.body;

    const ai = new GoogleGenAI({ apiKey });

    const promptText = `You are an expert AI Vibe Coding Prompt Architect.
Refine, expand, and optimize the following Web Interface prompt so that AI code generators like ${targetTool || "v0 / Cursor / Bolt"} build a pixel-perfect, modern, production-grade web application.

Target Interface: ${interfaceType || "Dashboard"}
Design Style: ${designStyle || "Minimalist"}
Target AI Tool: ${targetTool || "v0 / Cursor"}
Tech Stack: ${(techStack || []).join(", ") || "Tailwind CSS, Shadcn UI, Framer Motion"}
Included Components: ${(components || []).join(", ") || "Header, Cards, Data Table"}
Color Theme Accent: ${colorTheme || "Indigo / Dark Slate"}
Specific Directives: ${customInstructions || "High contrast dark mode, fluid responsiveness, smooth animations"}

Generate a comprehensive, battle-tested prompt structured with:
1. High-level Design Objective & Aesthetic Principles
2. Component Architecture & Structural Layout
3. Color Palette & Typography Guidelines
4. Key Interactive States & Micro-animations
5. Technical Requirements & Code Quality Rules

Return ONLY the raw prompt text without markdown backticks surrounding it, ready to be copied directly into AI coding assistant prompts.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: promptText,
    });

    const enhancedPrompt = response.text || "";

    return res.json({ enhancedPrompt });
  } catch (error: any) {
    console.error("Error enhancing prompt:", error);
    return res.status(500).json({ error: error.message || "Failed to generate AI prompt" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
