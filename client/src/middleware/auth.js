import { SET_USER, LOGOUT_USER } from '../actions/types';
import setAuthToken from '../util/setAuthToken';

export default () => next => action => {
  if (action.type === SET_USER) {
    setAuthToken(action.payload);
    localStorage.setItem('token', action.payload);
  } else if (action.type === LOGOUT_USER) {
    setAuthToken(false);
    localStorage.removeItem('token');
  }
  next(action);
};
