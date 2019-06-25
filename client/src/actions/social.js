import axios from 'axios';
import history from '../util/history';
import { getFirstProfile } from './profile';
import { SET_ERROR, SET_PROFILE, SET_PROFILE_LOADING } from './types';

export const setProfileLoading = () => ({
  type: SET_PROFILE_LOADING
});

export const setError = err => ({
  type: SET_ERROR,
  payload: err.response.data
});

export const submitSocial = (formValues, profileId) => async dispatch => {
  dispatch(setProfileLoading());
  try {
    const response = await axios.post(
      `/api/profile/${profileId}/social`,
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

export const updateSocial = (formValues, profileId) => async dispatch => {
  dispatch(setProfileLoading());
  try {
    const response = await axios.patch(
      `/api/profile/${profileId}/social`,
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

export const deleteSocial = profileId => async dispatch => {
  dispatch(setProfileLoading());
  try {
    await axios.delete(`/api/profile/${profileId}/social`);
    const response = await axios.get(`/api/profile/${profileId}`);
    dispatch({
      type: SET_PROFILE,
      payload: response.data
    });
  } catch (err) {
    dispatch(setError(err));
  }
};
