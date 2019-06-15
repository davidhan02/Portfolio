import {
  SET_ERROR,
  FETCH_USER,
  SET_USER_LOADING,
  CLEAR_USER_LOADING
} from '../actions/types';
import { isEmpty } from '../utils/validators';

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false
      };
    case SET_USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_USER_LOADING:
      return {
        ...state,
        loading: false
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
