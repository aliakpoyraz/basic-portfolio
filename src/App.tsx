import { useState, useEffect } from 'react';
import { ProfileCard } from './components/ProfileCard';
import { JsonView } from './components/JsonView';
import { LanguageToggle } from './components/LanguageToggle';
import { GridBackground } from './components/GridBackground';
import { useLanguage } from './hooks/useLanguage';
import { Moon, Sun } from 'lucide-react';

function App() {
  const { data, language, toggleLanguage } = useLanguage();
  const [isJsonView, setIsJsonView] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <GridBackground />
      
      <div className="fixed top-6 right-6 z-10 flex items-center gap-2">
        <button
          onClick={toggleDarkMode}
          className="bg-white/80 dark:bg-dark-header/80 backdrop-blur-sm border border-gray-200 dark:border-dark-border rounded-full p-2 text-sm font-medium text-gray-700 dark:text-dark-text hover:bg-white dark:hover:bg-dark-header hover:shadow-lg transition-all duration-300 hover:scale-105"
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <LanguageToggle 
          language={language} 
          onToggle={toggleLanguage}
          isDarkMode={isDarkMode}
          onDarkModeToggle={toggleDarkMode}
        />
      </div>
      
      <main className="h-screen w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        <div className="w-full max-w-2xl relative flex items-center justify-center">
          <div className={`absolute w-full transition-all duration-500 ease-in-out ${isJsonView ? 'opacity-0 scale-95 blur-sm pointer-events-none' : 'opacity-100 scale-100 blur-0'}`}>
            <div className="flex items-center justify-center">
              <ProfileCard 
                data={data} 
                onViewToggle={() => setIsJsonView(true)}
                language={language}
              />
            </div>
          </div>
          <div className={`absolute w-full transition-all duration-500 ease-in-out ${isJsonView ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm pointer-events-none'}`}>
            <div className="flex items-center justify-center">
              <JsonView 
                data={data} 
                onViewToggle={() => setIsJsonView(false)}
                language={language}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;