import {
  SET_ERROR,
  SET_PROJECT,
  SET_PROJECT_LIST,
  SET_PROJECT_LOADING
} from '../actions/types';

const initialState = {
  project: null,
  projects: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT:
      return {
        ...state,
        project: action.payload,
        loading: false
      };
    case SET_PROJECT_LIST:
      return {
        ...state,
        projects: action.payload,
        loading: false
      };
    case SET_PROJECT_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
