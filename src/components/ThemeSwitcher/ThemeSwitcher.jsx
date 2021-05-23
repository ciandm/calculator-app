import React from 'react';
import './ThemeSwitcher.css';
import useTheme from '../hooks/useTheme';

function ThemeSwitcher() {
  const [theme, handleThemeToggle] = useTheme();
  return (
    <div className="switcher">
      <h2 className="switcher__title">Theme</h2>
      <div className="switcher__options">
        <button
          type="button"
          className="switcher__option"
          onClick={() => handleThemeToggle('gray')}
        >
          <div className="switcher__number">1</div>
          <div className="switcher__toggle" />
        </button>
        <button
          type="button"
          className="switcher__option"
          onClick={() => handleThemeToggle('light')}
        >
          <div className="switcher__number">2</div>
          <div className="switcher__toggle" />
        </button>
        <button
          type="button"
          className="switcher__option"
          onClick={() => handleThemeToggle('purple')}
        >
          <div className="switcher__number">3</div>
          <div className="switcher__toggle" />
        </button>
        <div className={`switcher__selected switcher__selected--${theme}`} />
      </div>
    </div>
  );
}

export default ThemeSwitcher;
