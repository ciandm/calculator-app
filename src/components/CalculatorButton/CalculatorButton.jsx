import React from 'react';
import './CalculatorButton.css';

function CalculatorButton({ operator, type, classHelper, handleButtonPress }) {
  return (
    <button
      type="button"
      className={`button button--${classHelper || operator}`}
      onClick={() => handleButtonPress(operator, type)}
    >
      {operator}
    </button>
  );
}

export default CalculatorButton;
