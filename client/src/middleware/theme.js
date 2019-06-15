import { TOGGLE_THEME } from '../actions/types';

export default () => next => action => {
  if (action.type === TOGGLE_THEME) {
    const dark = localStorage.getItem('dark') === 'true';
    localStorage.setItem('dark', (!dark).toString());
  }
  next(action);
};
