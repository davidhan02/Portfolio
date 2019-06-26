import {
  SET_ERROR,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  SET_MESSAGE_LIST,
  SET_MESSAGE_LOADING
} from '../actions/types';

const initialState = {
  list: [],
  single: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        single: action.payload,
        loading: false
      };
    case SET_MESSAGE_LIST:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case SET_MESSAGE_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false
      };
    case CLEAR_MESSAGE:
      return {
        list: [],
        single: null,
        loading: false
      };
    default:
      return state;
  }
};
