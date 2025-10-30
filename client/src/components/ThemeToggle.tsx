import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      data-testid="button-theme-toggle"
    >
      <div
        className={`absolute top-1 ${
          theme === 'dark' ? 'left-9' : 'left-1'
        } w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center transition-all duration-300 ease-in-out shadow-sm`}
      >
        {theme === 'light' ? (
          <Sun className="w-3.5 h-3.5 text-yellow-500" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-blue-400" />
        )}
      </div>
    </button>
  );
}
