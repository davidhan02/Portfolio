import axios from 'axios';
import history from '../util/history';
import { SET_ERROR, SET_PROFILE, SET_PROFILE_LOADING } from './types';

export const setProfileLoading = () => ({
  type: SET_PROFILE_LOADING
});

export const setError = err => ({
  type: SET_ERROR,
  payload: err.response.data
});

export const submitCert = (formValues, profileId) => async dispatch => {
  dispatch(setProfileLoading());
  try {
    const response = await axios.post(`/api/profile/${profileId}/cert`, formValues);
    dispatch({
      type: SET_PROFILE,
      payload: response.data
    });
    history.push('/profile');
  } catch (err) {
    dispatch(setError(err));
  }
};

export const updateCert = (formValues, profileId, certId) => async dispatch => {
  dispatch(setProfileLoading());
  try {
    const response = await axios.patch(
      `/api/profile/${profileId}/cert/${certId}`,
      formValues
    );
    dispatch({
      type: SET_PROFILE,
      payload: response.data
    });
    history.push('/profile');
  } catch (err) {
    dispatch(setError(err));
  }
};

export const deleteCert = (profileId, certId) => async dispatch => {
  if (window.confirm('Are you sure you want to delete this certificate?')) {
    dispatch(setProfileLoading());
    try {
      await axios.delete(`/api/profile/${profileId}/cert/${certId}`);
      const response = await axios.get(`/api/profile/${profileId}`);
      dispatch({
        type: SET_PROFILE,
        payload: response.data
      });
    } catch (err) {
      dispatch(setError(err));
    }
  }
};
