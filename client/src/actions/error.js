import { SHOW_ERROR, CLEAR_ERROR } from './types';

const clearError = () => ({ type: CLEAR_ERROR });
const showError = error => ({ type: SHOW_ERROR, payload: error });

let timeout;

export const showErrorWithTimeout = error => dispatch => {
  dispatch(showError(error));
  clearTimeout(timeout);
  timeout = setTimeout(() => dispatch(clearError()), 5000);
};

export const clearErrorWithTimeout = () => dispatch => {
  dispatch(clearError());
  clearTimeout(timeout);
};
