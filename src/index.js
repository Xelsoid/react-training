import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '@store';
import ErrorBoundary from '@components/ErrorBoundary';
import Header from '@components/Header';
import Main from '@components/Main';
import Footer from '@components/Footer';
import '@styles/reset.css';
import '@styles/colours.scss';
import '@styles/styles.scss';
import PageNotFound from '@components/PageNotFound';

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Switch>
        <Route path="/404" exact component={PageNotFound} />
        <Route path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  </ErrorBoundary>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('reactRoot'),
);
