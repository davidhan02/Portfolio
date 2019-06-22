import { CLOSE_MENU, TOGGLE_MENU } from './types';

export const toggleMenu = () => dispatch => {
  if (window.innerWidth < 800) {
    dispatch({ type: TOGGLE_MENU });
  }
};

export const closeMenu = () => dispatch => {
  if (window.innerWidth < 800) {
    dispatch({ type: CLOSE_MENU });
  }
};
