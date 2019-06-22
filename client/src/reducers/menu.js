import { CLOSE_MENU, TOGGLE_MENU } from '../actions/types';

const initialState = { open: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { open: !state.open };
    case CLOSE_MENU:
      return { open: false };
    default:
      return state;
  }
};
