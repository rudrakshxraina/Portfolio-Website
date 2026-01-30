import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const getInitial = () => {
    const saved = localStorage.getItem('site-theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    document.documentElement.classList.remove('theme-dark', 'theme-light');
    document.documentElement.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
    localStorage.setItem('site-theme', theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle-button"
      onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={theme === 'dark'}
      title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span className={`icon moon ${theme === 'dark' ? 'show' : ''}`} aria-hidden>
        <FaMoon />
      </span>
      <span className={`icon sun ${theme === 'light' ? 'show' : ''}`} aria-hidden>
        <FaSun />
      </span>
      <span className="visually-hidden">{theme === 'dark' ? 'Dark mode active' : 'Light mode active'}</span>
    </button>
  );
}
