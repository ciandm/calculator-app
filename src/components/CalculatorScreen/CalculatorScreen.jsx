import React from 'react';
import './CalculatorScreen.css';

function CalculatorScreen({ value }) {
  return (
    <div className="screen">
      <div className="screen__input">{value || '0'}</div>
    </div>
  );
}

export default CalculatorScreen;
