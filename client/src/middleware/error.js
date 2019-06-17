import { clearErrorWithTimeout, showErrorWithTimeout } from '../actions/error';
import { SET_ERROR, SET_USER, LOGOUT_USER } from '../actions/types';

export default store => next => action => {
  next(action);
  switch (action.type) {
    case SET_USER:
    case LOGOUT_USER:
      if (store.getState().error) store.dispatch(clearErrorWithTimeout());
      break;

    case SET_ERROR:
      if (store.getState().error) store.dispatch(showErrorWithTimeout());
      break;

    default:
      break;
  }
};
