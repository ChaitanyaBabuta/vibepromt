import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  provider: 'github' | 'google' | 'email';
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isAuthModalOpen: boolean;
  signIn: (provider: string, email?: string, password?: string) => Promise<void>;
  signOut: () => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function generateAvatarUrl(name: string): string {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  // Neutral avatar so it sits correctly in both the light and dark themes.
  // Baked into a data URI at sign-in time, so it cannot react to theme changes;
  // mid-grey with white initials keeps sufficient contrast either way.
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#71717a" /><text x="50" y="50" font-family="system-ui, sans-serif" font-size="38" font-weight="600" fill="#ffffff" text-anchor="middle" dominant-baseline="central">${initials}</text></svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('vibeprompt_auth_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Failed to parse stored user', e);
      }
    }
    setIsLoading(false);
  }, []);

  const signIn = useCallback(async (provider: string, email?: string, password?: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    let newUser: User;
    const id = Math.random().toString(36).substring(2, 9);

    if (provider === 'github') {
      newUser = {
        id,
        name: 'Alex Mercer',
        email: 'alex@github.com',
        avatar: generateAvatarUrl('Alex Mercer'),
        provider: 'github'
      };
    } else if (provider === 'google') {
      newUser = {
        id,
        name: 'Sarah Chen',
        email: 'sarah@google.com',
        avatar: generateAvatarUrl('Sarah Chen'),
        provider: 'google'
      };
    } else {
      const derivedName = email ? email.split('@')[0] : 'User';
      newUser = {
        id,
        name: derivedName,
        email: email || 'user@example.com',
        avatar: generateAvatarUrl(derivedName),
        provider: 'email'
      };
    }

    setUser(newUser);
    localStorage.setItem('vibeprompt_auth_user', JSON.stringify(newUser));
    setIsAuthModalOpen(false);
    setIsLoading(false);
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    localStorage.removeItem('vibeprompt_auth_user');
  }, []);

  const openAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    isAuthModalOpen,
    signIn,
    signOut,
    openAuthModal,
    closeAuthModal,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
