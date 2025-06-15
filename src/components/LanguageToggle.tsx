import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: 'tr' | 'en';
  onToggle: () => void;
  isDarkMode: boolean;
  onDarkModeToggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  language, 
  onToggle,
  isDarkMode,
  onDarkModeToggle
}) => {
  return (
    <button
      onClick={onToggle}
      className="bg-white/80 dark:bg-dark-header/80 backdrop-blur-sm border border-gray-200 dark:border-dark-border rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-dark-text hover:bg-white dark:hover:bg-dark-header hover:shadow-lg transition-all duration-300 hover:scale-105"
    >
      <Globe size={16} />
      <span className="font-bold text-blue-600 dark:text-dark-accent">{language.toUpperCase()}</span>
    </button>
  );
};
