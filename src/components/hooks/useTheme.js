import { useEffect, useState } from 'react';

function useTheme() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = `theme-${savedTheme}`;
    }
  }, []);

  const handleThemeToggle = choice => {
    if (theme === choice) return;
    setTheme(choice);
    document.documentElement.className = `theme-${choice}`;
    localStorage.setItem('theme', choice);
  };

  return [theme, handleThemeToggle];
}

export default useTheme;
