import React from 'react';
import './CalculatorHeader.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

function CalculatorHeader() {
  return (
    <div className="header">
      <h1 className="header__title">Calc</h1>
      <ThemeSwitcher />
    </div>
  );
}

export default CalculatorHeader;
