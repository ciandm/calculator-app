import React, { useState, useEffect } from 'react';
import './CalculatorScreen.css';

function CalculatorScreen({ value }) {
  const [formattedResult, setFormattedResult] = useState(value);
  useEffect(() => {
    if (value === 0) {
      setFormattedResult(0);
    } else {
      const valueAsFloat = parseFloat(value);
      setFormattedResult(
        valueAsFloat.toLocaleString('fullwide', { maximumFractionDigits: 8 })
      );
    }
  }, [value]);
  return (
    <div className="screen">
      <div className="screen__input">{formattedResult}</div>
    </div>
  );
}

export default CalculatorScreen;
