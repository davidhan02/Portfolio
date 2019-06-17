import {
  SET_ERROR,
  SET_USER,
  LOGOUT_USER,
  SET_USER_LOADING,
  CLEAR_USER_LOADING
} from '../actions/types';
import jwtDecode from 'jwt-decode';

const token = localStorage.getItem('token');
const user = token && jwtDecode(token).user;

const initialState = {
  ...(token && { token }),
  ...(user && { user }),
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: jwtDecode(action.payload).user,
        token: action.payload,
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
    case LOGOUT_USER:
      return {
        ...state,
        token: null,
        user: null,
        loading: false
      };
    default:
      return state;
  }
}
