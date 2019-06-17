import { TOGGLE_MENU } from '../actions/types';

const initialState = { open: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, open: !state.open };
    default:
      return state;
  }
};
