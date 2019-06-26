import axios from 'axios';
import history from '../util/history';
import {
  SET_ERROR,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  SET_MESSAGE_LIST,
  SET_MESSAGE_LOADING
} from './types';

export const clearMessage = () => ({
  type: CLEAR_MESSAGE
});

export const setMessageLoading = () => ({
  type: SET_MESSAGE_LOADING
});

export const setError = err => ({
  type: SET_ERROR,
  payload: err.response.data
});

export const getMessageList = () => async dispatch => {
  dispatch(setMessageLoading());
  try {
    const response = await axios.get('/api/message');
    dispatch({
      type: SET_MESSAGE_LIST,
      payload: response.data
    });
  } catch (err) {
    dispatch(setError(err));
  }
};

export const getMessage = messageId => async dispatch => {
  dispatch(setMessageLoading());
  try {
    const response = await axios.get(`/api/message/${messageId}`);
    dispatch({
      type: SET_MESSAGE,
      payload: response.data
    });
  } catch (err) {
    dispatch(setError(err));
  }
};

export const submitMessage = formValues => async dispatch => {
  dispatch(setMessageLoading());
  try {
    const response = await axios.post('/api/message', formValues);
    history.push(`/dashboard/${response.data.id}`);
  } catch (err) {
    dispatch(setError(err));
  }
};

export const deleteMessage = messageId => async dispatch => {
  if (window.confirm('Are you sure you want to delete this message?')) {
    dispatch(setMessageLoading());
    try {
      await axios.delete(`/api/message/${messageId}`);
      const response = await axios.get('/api/message');
      dispatch({
        type: SET_MESSAGE_LIST,
        payload: response.data
      });
    } catch (err) {
      dispatch(setError(err));
    }
  }
};
