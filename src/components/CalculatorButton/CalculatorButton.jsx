import React from 'react';
import './CalculatorButton.css';

function CalculatorButton({ operator, classHelper, ...restProps }) {
  return (
    <button
      type="button"
      className={`button button--${classHelper || operator}`}
      {...restProps}
    >
      {operator}
    </button>
  );
}

export default CalculatorButton;
