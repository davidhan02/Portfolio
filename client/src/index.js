import './util/moment';
import './styles/normalize.css';
import './styles/mini-reset.css';
import './styles/inputfix.css';
import './styles/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './util/store';
import { Provider } from 'react-redux';
import AppContainer from './components/App/Container';
import * as serviceWorker from './util/serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
