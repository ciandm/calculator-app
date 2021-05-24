import React from 'react';
import CalculatorBody from '../CalculatorBody/CalculatorBody';
import CalculatorButton from '../CalculatorButton/CalculatorButton';
import CalculatorHeader from '../CalculatorHeader/CalculatorHeader';
import CalculatorScreen from '../CalculatorScreen/CalculatorScreen';
import './Calculator.css';
import useCalculatorInput from '../hooks/useCalculatorInput';

function Calculator() {
  const [state, dispatch] = useCalculatorInput();

  const handleButtonPress = (operator, type) => {
    if (operator === '.' && state.currentInput.includes('.')) return;
    dispatch({
      payload: {
        value: operator,
      },
      type,
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
            type="append"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="2"
            type="append"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="3"
            type="append"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="4"
            type="append"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="5"
            type="append"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="6"
            type="append"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="7"
            type="append"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="8"
            type="append"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="9"
            type="append"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="."
            classHelper="dot"
            type="append"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="0"
            type="append"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="/"
            classHelper="divide"
            type="function"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="del"
            type="del"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="x"
            classHelper="multiply"
            type="function"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="+"
            classHelper="plus"
            type="function"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="-"
            classHelper="minus"
            type="function"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="reset"
            type="reset"
            handleButtonPress={handleButtonPress}
          />
          <CalculatorButton
            operator="="
            classHelper="equal"
            type="equal"
            handleButtonPress={handleButtonPress}
          />
        </CalculatorBody>
      </div>
    </section>
  );
}

export default Calculator;
