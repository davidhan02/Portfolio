import { CLOSE_MENU, TOGGLE_MENU } from './types';

export const toggleMenu = () => {
  if (window.innerWidth < 800) {
    return { type: TOGGLE_MENU };
  }
};

export const closeMenu = () => {
  if (window.innerWidth < 800) {
    return { type: CLOSE_MENU };
  }
};
