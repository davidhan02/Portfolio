import axios from 'axios';
import { SET_USER, SET_ERROR, SET_USER_LOADING, LOGOUT_USER } from './types';

export const logout = () => ({
  type: LOGOUT_USER
});

export const setUserLoading = () => ({
  type: SET_USER_LOADING
});

export const setError = err => ({
  type: SET_ERROR,
  payload: err.response.data
});

export const submitLogin = formValues => async dispatch => {
  dispatch(setUserLoading());
  try {
    const login = await axios.post('/api/login', formValues);
    dispatch({
      type: SET_USER,
      payload: login.data.token
    });
  } catch (err) {
    dispatch(setError(err));
  }
};

export const submitRegister = formValues => async dispatch => {
  dispatch(setUserLoading());
  try {
    const register = await axios.post('/api/register', formValues);
    dispatch({
      type: SET_USER,
      payload: register.data.token
    });
  } catch (err) {
    dispatch(setError(err));
  }
};
