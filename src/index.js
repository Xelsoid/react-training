import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@store';
import ErrorBoundary from '@components/ErrorBoundary';
import Header from '@components/Header';
import Main from '@components/Main';
import Footer from '@components/Footer';
import '@styles/reset.css';
import '@styles/colours.scss';
import '@styles/styles.scss';

const App = () => (
  <ErrorBoundary>
    <Header />
    <Main />
    <Footer />
  </ErrorBoundary>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('reactRoot'),
);
