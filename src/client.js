import React from 'react';
import ReactDOM from 'react-dom';
import '@styles/reset.css';
import '@styles/colours.scss';
import '@styles/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/index';
import App from './index';

const store = configureStore(window.PRELOADED_STATE);

ReactDOM.hydrate(
  <App
    Router={BrowserRouter}
    store={store}
  />,
  document.getElementById('reactRoot'),
);
