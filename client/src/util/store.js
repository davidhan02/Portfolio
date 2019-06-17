import { createStore, applyMiddleware, compose } from 'redux';
import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import auth from '../reducers/auth';
import error from '../reducers/error';
import theme from '../reducers/theme';
import themeMiddleware from '../middleware/theme';
import errorMiddleware from '../middleware/error';
import authMiddleware from '../middleware/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ auth, theme, form, error }),
  composeEnhancers(
    applyMiddleware(thunk, themeMiddleware, errorMiddleware, authMiddleware)
  )
);

export default store;
