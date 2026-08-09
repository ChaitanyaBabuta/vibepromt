import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PromptGrid } from './components/PromptGrid';
import { PromptBuilder } from './components/PromptBuilder';
import { CategoriesSection } from './components/CategoriesSection';
import { PromptDetailModal } from './components/PromptDetailModal';
import { SubmitPromptModal } from './components/SubmitPromptModal';
import { AllPromptsModal } from './components/AllPromptsModal';
import { SignInModal } from './components/SignInModal';
import { Footer } from './components/Footer';
import { INITIAL_PROMPTS } from './data/promptsData';
import { UIPrompt } from './types';
import { useAuth } from './contexts/AuthContext';

export default function App() {
  const { isAuthModalOpen, closeAuthModal } = useAuth();
  const [prompts, setPrompts] = useState<UIPrompt[]>(() => {
    try {
      const saved = localStorage.getItem('vibeprompt_prompts');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Combine initial prompts with saved ones, preventing duplicates
        const customOnly = parsed.filter((p: UIPrompt) => !INITIAL_PROMPTS.some((ip) => ip.id === p.id));
        return [...INITIAL_PROMPTS, ...customOnly];
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_PROMPTS;
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('vibeprompt_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [activeTab, setActiveTab] = useState<'library' | 'builder' | 'categories' | 'favorites'>('library');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPromptModal, setSelectedPromptModal] = useState<UIPrompt | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [isAllPromptsModalOpen, setIsAllPromptsModalOpen] = useState<boolean>(false);

  // Sync favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('vibeprompt_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  // Sync custom prompts to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('vibeprompt_prompts', JSON.stringify(prompts));
    } catch (e) {
      console.error(e);
    }
  }, [prompts]);

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSavePrompt = (newPrompt: UIPrompt) => {
    setPrompts((prev) => [newPrompt, ...prev]);
  };

  const handleCopyPrompt = (prompt: UIPrompt) => {
    setPrompts((prev) =>
      prev.map((p) => (p.id === prompt.id ? { ...p, copies: p.copies + 1 } : p))
    );
  };

  const handleOpenBuilderWithPrompt = (prompt: UIPrompt) => {
    setActiveTab('builder');
    // The builder is its own view, so bring the user to the top of it
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">

      {/* Sticky header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'favorites') {
            setSelectedCategory('Favorites');
          } else if (tab === 'library') {
            setSelectedCategory('All');
          }
        }}
        favoritesCount={favorites.length}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        onOpenAllPromptsModal={() => setIsAllPromptsModalOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Hero Section (Rendered on Library & Favorites tabs) */}
      {(activeTab === 'library' || activeTab === 'favorites') && (
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={(cat) => {
            setSelectedCategory(cat);
            setActiveTab('library');
          }}
          onOpenBuilder={() => setActiveTab('builder')}
          onOpenAllPromptsModal={() => setIsAllPromptsModalOpen(true)}
          prompts={prompts}
          onSelectPrompt={(prompt) => setSelectedPromptModal(prompt)}
        />
      )}

      {/* Main View Area */}
      <main className="flex-1">
        {activeTab === 'builder' ? (
          <PromptBuilder
            onSavePrompt={handleSavePrompt}
            onPreviewPrompt={(prompt) => setSelectedPromptModal(prompt)}
            onBackToMain={() => setActiveTab('library')}
          />
        ) : activeTab === 'categories' ? (
          <CategoriesSection
            prompts={prompts}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setActiveTab('library');
              window.scrollTo({ top: 400, behavior: 'smooth' });
            }}
            onBackToMain={() => setActiveTab('library')}
          />
        ) : (
          <PromptGrid
            prompts={prompts}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectPrompt={(prompt) => setSelectedPromptModal(prompt)}
            onCopyPrompt={handleCopyPrompt}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onOpenAllPromptsModal={() => setIsAllPromptsModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Detail Modal View */}
      <PromptDetailModal
        prompt={selectedPromptModal}
        isOpen={!!selectedPromptModal}
        onClose={() => setSelectedPromptModal(null)}
        isFavorite={selectedPromptModal ? favorites.includes(selectedPromptModal.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onCopyPrompt={handleCopyPrompt}
        onOpenBuilderWithPrompt={handleOpenBuilderWithPrompt}
      />

      {/* Submit Prompt Modal */}
      <SubmitPromptModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmit={handleSavePrompt}
      />

      {/* Full-Screen All Prompts Modal */}
      <AllPromptsModal
        isOpen={isAllPromptsModalOpen}
        onClose={() => setIsAllPromptsModalOpen(false)}
        prompts={prompts}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        onSelectPrompt={(prompt) => setSelectedPromptModal(prompt)}
        onCopyPrompt={handleCopyPrompt}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
      />

      {/* Sign In / Auth Modal */}
      <SignInModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
      />

    </div>
  );
}
