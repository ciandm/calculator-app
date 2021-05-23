import React from 'react';
import CalculatorBody from '../CalculatorBody/CalculatorBody';
import CalculatorButton from '../CalculatorButton/CalculatorButton';
import CalculatorHeader from '../CalculatorHeader/CalculatorHeader';
import CalculatorScreen from '../CalculatorScreen/CalculatorScreen';
import './Calculator.css';
import useCalculatorInput from '../hooks/useCalculatorInput';

function Calculator() {
  const [state, dispatch] = useCalculatorInput();

  const handleNumberAppend = operator => {
    dispatch({
      payload: {
        value: operator,
      },
      type: 'append',
    });
  };
  return (
    <section className="section">
      <div className="container">
        <CalculatorHeader />
        <CalculatorScreen value={state.currentInput} />
        <CalculatorBody>
          <CalculatorButton
            operator="1"
            onClick={() => handleNumberAppend('1')}
          />
          <CalculatorButton operator="2" />
          <CalculatorButton operator="3" />
          <CalculatorButton operator="4" />
          <CalculatorButton operator="5" />
          <CalculatorButton operator="6" />
          <CalculatorButton operator="7" />
          <CalculatorButton operator="8" />
          <CalculatorButton operator="9" />
          <CalculatorButton operator="." classHelper="dot" />
          <CalculatorButton operator="0" />
          <CalculatorButton operator="/" classHelper="divide" />
          <CalculatorButton operator="del" />
          <CalculatorButton operator="x" />
          <CalculatorButton operator="+" classHelper="plus" />
          <CalculatorButton operator="-" classHelper="minus" />
          <CalculatorButton operator="reset" />
          <CalculatorButton operator="=" classHelper="equal" />
        </CalculatorBody>
      </div>
    </section>
  );
}

export default Calculator;
