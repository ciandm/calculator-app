import React from 'react';
import CalculatorHeader from '../CalculatorHeader/CalculatorHeader';
import CalculatorScreen from '../CalculatorScreen/CalculatorScreen';
import './Calculator.css';

function Calculator() {
  return (
    <section className="section">
      <div className="container">
        <CalculatorHeader />
        <CalculatorScreen />
      </div>
    </section>
  );
}

export default Calculator;
