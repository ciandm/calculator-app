import { useReducer } from 'react';

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'append':
      return {
        ...state,
        currentInput: state.currentInput + payload.value,
      };
    case 'ignore':
      return state;
    default:
      return state;
  }
}
function useCalculatorInput() {
  const [state, dispatch] = useReducer(reducer, {
    currentInput: '',
    previousInput: '',
  });

  return [state, dispatch];
}

export default useCalculatorInput;
