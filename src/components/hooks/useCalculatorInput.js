import { useReducer } from 'react';

function calculate(current, previous, operand) {
  if (operand === 'x') {
    return current * previous;
  }

  if (operand === '/') {
    return previous / current;
  }

  if (operand === '-') {
    return previous - current;
  }

  // default is set to addition
  return Number(previous) + Number(current);
}

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'append':
      return {
        ...state,
        currentInput: state.currentInput + payload.value,
      };
    case 'del':
      return {
        ...state,
        currentInput: '',
      };
    case 'equal':
      return {
        ...state,
        currentInput: calculate(
          state.currentInput,
          state.previousInput,
          state.savedOperand
        ),
        previousInput: '',
        savedOperand: '',
      };
    case 'function':
      return {
        ...state,
        currentInput: '',
        previousInput: state.currentInput,
        savedOperand: payload.value,
      };
    case 'reset': {
      return {
        currentInput: '',
        previousInput: '',
        savedOperand: '',
      };
    }
    default:
      return state;
  }
}
function useCalculatorInput() {
  const [state, dispatch] = useReducer(reducer, {
    currentInput: '',
    previousInput: '',
    savedOperand: '',
  });

  return [state, dispatch];
}

export default useCalculatorInput;
