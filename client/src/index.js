import './styles/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './utils/store';
import { Provider } from 'react-redux';
import AppContainer from './components/App/Container';
import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
