import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ErrorBoundary from '@components/ErrorBoundary';
import '@styles/reset.css';
import '@styles/colours.scss';
import '@styles/styles.scss';
import PageNotFound from '@components/PageNotFound';
import RootPage from '@root/src/pages/RootPage';
import FilmPage from '@root/src/pages/FilmPage';

const App = ({ Router, location, context, store }) => (
  <Provider store={store}>
    <ErrorBoundary>
      <Router location={location} context={context}>
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
      </Router>
    </ErrorBoundary>
  </Provider>
);

export default hot(module)(App);

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.instanceOf(Object),
};
App.defaultProps = {
  location: null,
  context: null,
  store: {},
};
