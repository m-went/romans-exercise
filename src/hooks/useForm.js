import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'clearValues':
      return { ...action.initialState };
    case 'inputChange':
      return { ...state, [action.inputName]: action.inputValue };
    case 'consentToggle':
      return { ...state, consent: !state.consent };
    case 'throwError':
      return { ...state, error: action.errorMessage };
    default:
      return state;
  }
}

function useForm(initialState) {
  const [formState, dispatch] = useReducer(reducer, initialState);

  const handleClearForm = () => {
    dispatch({ type: 'clearValues', initialState });
  };

  const handleConsentToggle = () => {
    dispatch({ type: 'consentToggle' });
  };

  const handleInputChange = (e) => {
    dispatch({ type: 'inputChange', inputName: e.target.name, inputValue: e.target.value });
  };

  const throwError = (errorMessage) => {
    dispatch({ type: 'throwError', errorMessage });
  };
  return { formState, handleClearForm, handleConsentToggle, handleInputChange, throwError };
}

export default useForm;
