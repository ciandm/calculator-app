import { useReducer } from 'react';

function calculate(current, previous, operand) {
  if (operand === 'x') {
    return (parseFloat(current) * parseFloat(previous)).toString();
  }

  if (operand === '/') {
    return (parseFloat(previous) / parseFloat(current)).toString();
  }

  if (operand === '-') {
    return (parseFloat(previous) - parseFloat(current)).toString();
  }

  // default is set to addition
  return (parseFloat(previous) + parseFloat(current)).toString();
}

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'append':
      if (state.hasBeenCalculated) {
        return {
          ...state,
          currentInput: payload.value,
          hasBeenCalculated: false,
        };
      }
      return {
        ...state,
        currentInput: state.currentInput + payload.value,
      };
    case 'del':
      return {
        ...state,
        currentInput: '0',
      };
    case 'equal':
      // if there is no previously saved input, cannot complete any calculations
      if (state.previousInput === '' || state.currentInput === '0') {
        return {
          ...state,
        };
      }
      return {
        ...state,
        currentInput: calculate(
          state.currentInput,
          state.previousInput,
          state.savedOperand
        ),
        hasBeenCalculated: true,
        previousInput: '',
        savedOperand: '',
      };
    case 'function':
      // if current input is 0, change the function and nothing else
      if (state.currentInput === '0') {
        return {
          ...state,
          savedOperand: payload.value,
        };
      }
      return {
        ...state,
        currentInput: '0',
        previousInput: state.currentInput,
        savedOperand: payload.value,
      };
    case 'reset': {
      return {
        currentInput: '0',
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
    currentInput: '0',
    hasBeenCalculated: false,
    previousInput: '',
    savedOperand: '',
  });

  return [state, dispatch];
}

export default useCalculatorInput;
