import axios from 'axios';
import history from '../util/history';
import { SET_ERROR, SET_PROFILE, CLEAR_PROFILE, SET_PROFILE_LOADING } from './types';

export const clearProfile = () => ({
  type: CLEAR_PROFILE
});

export const setProfileLoading = () => ({
  type: SET_PROFILE_LOADING
});

export const setError = err => ({
  type: SET_ERROR,
  payload: err.response.data
});

export const getFirstProfile = () => async dispatch => {
  dispatch(setProfileLoading());
  try {
    const response = await axios.get('/api/profile');
    dispatch({
      type: SET_PROFILE,
      payload: response.data[0]
    });
  } catch (err) {
    dispatch(setError(err));
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
    dispatch(setError(err));
  }
};

export const submitProfile = formValues => async dispatch => {
  dispatch(setProfileLoading());
  try {
    await axios.post('/api/profile', formValues);
    history.push('/profile');
  } catch (err) {
    dispatch(setError(err));
  }
};

export const updateProfile = (formValues, profileId) => async dispatch => {
  dispatch(setProfileLoading());
  try {
    await axios.patch(`/api/profile/${profileId}`, formValues);
    history.push('/profile');
  } catch (err) {
    dispatch(setError(err));
  }
};

export const deleteProfile = profileId => async dispatch => {
  dispatch(setProfileLoading());
  try {
    await axios.delete(`/api/profile/${profileId}`);
    history.push('/dashboard');
  } catch (err) {
    dispatch(setError(err));
  }
};
