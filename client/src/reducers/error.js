import { SET_ERROR, CLEAR_ERROR } from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    case CLEAR_ERROR:
      return null;
    default:
      return state;
  }
};
