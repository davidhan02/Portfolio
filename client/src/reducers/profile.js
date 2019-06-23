import {
  SET_ERROR,
  SET_PROFILE,
  CLEAR_PROFILE,
  SET_PROFILE_LOADING
} from '../actions/types';

const initialState = {
  single: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        single: action.payload,
        loading: false
      };
    case SET_PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        single: null,
        loading: false
      };
    default:
      return state;
  }
};
