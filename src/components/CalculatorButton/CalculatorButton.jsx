import React, { useState, useEffect } from 'react';
import './CalculatorButton.css';

function CalculatorButton({ operator, type, classHelper, handleButtonPress }) {
  const [isClicked, setIsClicked] = useState(false);
  const applyButtonAnimation = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (!isClicked) return;
    const animationTimer = setTimeout(() => {
      setIsClicked(false);
    }, 200);
    // eslint-disable-next-line
    return () => clearTimeout(animationTimer);
  }, [isClicked]);
  return (
    <button
      type="button"
      className={`button button--${classHelper || operator} button--${
        isClicked ? 'clicked' : 'static'
      }`}
      onClick={() => {
        handleButtonPress(operator, type);
        applyButtonAnimation();
      }}
    >
      {operator}
    </button>
  );
}

export default CalculatorButton;
