import { TOGGLE_THEME } from '../actions/types';

const dark = localStorage.getItem('dark') === 'true';
const initialState = { dark };

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, dark: !state.dark };
    default:
      return state;
  }
};
