import axios from 'axios';
import history from '../util/history';
import {
  SET_ERROR,
  SET_PROJECT,
  CLEAR_PROJECT,
  SET_PROJECT_LIST,
  SET_PROJECT_LOADING
} from './types';

export const clearProject = () => ({
  type: CLEAR_PROJECT
});

export const setProjectLoading = () => ({
  type: SET_PROJECT_LOADING
});

export const setError = err => ({
  type: SET_ERROR,
  payload: err.response.data
});

export const getProjectList = () => async dispatch => {
  dispatch(setProjectLoading());
  try {
    const response = await axios.get('/api/project');
    dispatch({
      type: SET_PROJECT_LIST,
      payload: response.data
    });
  } catch (err) {
    dispatch(setError(err));
  }
};

export const getProjectsByCat = category => async dispatch => {
  dispatch(setProjectLoading());
  try {
    const response = await axios.get(`/api/project/cat/${category}`);
    dispatch({
      type: SET_PROJECT_LIST,
      payload: response.data
    });
  } catch (err) {
    dispatch(setError(err));
  }
};

export const getProject = projectId => async dispatch => {
  dispatch(setProjectLoading());
  try {
    const response = await axios.get(`/api/project/${projectId}`);
    dispatch({
      type: SET_PROJECT,
      payload: response.data
    });
  } catch (err) {
    dispatch(setError(err));
  }
};

export const submitProject = formValues => async dispatch => {
  dispatch(setProjectLoading());
  try {
    const response = await axios.post('/api/project', formValues);
    dispatch({
      type: SET_PROJECT,
      payload: response.data
    });
    history.push(`/projects/${response.data.id}`);
  } catch (err) {
    dispatch(setError(err));
  }
};

export const updateProject = (formValues, projectId) => async dispatch => {
  dispatch(setProjectLoading());
  try {
    const response = await axios.patch(`/api/project/${projectId}`, formValues);
    dispatch({
      type: SET_PROJECT,
      payload: response.data
    });
    history.push(`/projects/${response.data.id}`);
  } catch (err) {
    dispatch(setError(err));
  }
};

export const deleteProject = projectId => async dispatch => {
  dispatch(setProjectLoading());
  try {
    await axios.delete(`/api/project/${projectId}`);
    history.push('/dashboard');
  } catch (err) {
    dispatch(setError(err));
  }
};
