import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import store from '@store';
import ErrorBoundary from '@components/ErrorBoundary';
import '@styles/reset.css';
import '@styles/colours.scss';
import '@styles/styles.scss';
import PageNotFound from '@components/PageNotFound';
import RootPage from '@root/src/pages/RootPage';
import FilmPage from '@root/src/pages/FilmPage';

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Switch>
        <Route path="/404" exact>
          <PageNotFound />
        </Route>
        <Route path="/" exact>
          <RootPage />
        </Route>
        <Route path="/search/:searchQuery">
          <RootPage />
        </Route>
        <Route path="/film/:id">
          <FilmPage />
        </Route>
        <Redirect to="/404" />
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
