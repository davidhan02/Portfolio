import axios from 'axios';
import history from '../util/history';
import { SET_ERROR, SET_PROFILE, CLEAR_PROFILE, SET_PROFILE_LOADING } from './types';

export const clearProfile = () => ({
  type: CLEAR_PROFILE
});

export const setProfileLoading = () => ({
  type: SET_PROFILE_LOADING
});

export const getProfileList = () => async dispatch => {
  dispatch(setProfileLoading());
  try {
    const response = await axios.get('/api/profile');
    dispatch({
      type: SET_PROFILE,
      payload: response.data[0]
    });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.response.data
    });
  }
};

export const getProfile = profileId => async dispatch => {
  dispatch(setProfileLoading());
  try {
    const response = await axios.get(`/api/profile/${profileId}`);
    dispatch({
      type: SET_PROFILE,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.response.data
    });
  }
};

export const submitProfile = formValues => async dispatch => {
  dispatch(setProfileLoading());
  try {
    const response = await axios.post('/api/profile', formValues);
    dispatch({
      type: SET_PROFILE,
      payload: response.data
    });
    history.push(`/profile/${response.data.id}`);
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.response.data
    });
  }
};
