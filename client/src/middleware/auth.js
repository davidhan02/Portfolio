import { SET_USER, LOGOUT_USER } from '../actions/types';
import { isEmpty } from '../util/validators';

export default () => next => action => {
  if (action.type === SET_USER && !isEmpty(action.payload)) {
    localStorage.setItem('token', action.payload);
  } else if (action.type === LOGOUT_USER) {
    localStorage.removeItem('token');
  }
  next(action);
};
