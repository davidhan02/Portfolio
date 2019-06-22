import {
  SET_ERROR,
  SET_PROJECT,
  CLEAR_PROJECT,
  SET_PROJECT_LIST,
  SET_PROJECT_LOADING
} from '../actions/types';

const initialState = {
  list: [],
  single: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT:
      return {
        ...state,
        single: action.payload,
        loading: false
      };
    case SET_PROJECT_LIST:
      return {
        ...state,
        list: action.payload,
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
    case CLEAR_PROJECT:
      return {
        list: [],
        single: null,
        loading: false
      };
    default:
      return state;
  }
};
