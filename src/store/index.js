import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { rootReducer } from '@reducers';
import {
  moviesSaga, fetchDataAsync, fetchMovieDataRequest, fetchMoviesDataRequest,
} from '../services/movieReducers';
import { FETCH_HANDLERS } from '../services/constants';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export default (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(moviesSaga);
  store.runSaga = (url) => {
    let action = null;
    if (/\/search\/Search/i.test(url)) {
      const searchQuery = url.split(' ');
      action = fetchMoviesDataRequest(searchQuery[1], searchQuery[2], FETCH_HANDLERS.MOVIES);
    }

    if (/\/film/i.test(url) && !/\./i.test(url)) {
      const searchQuery = url.split('/');
      action = fetchMovieDataRequest(searchQuery[2], FETCH_HANDLERS.MOVIE);
    }

    return sagaMiddleware.run(fetchDataAsync, action);
  };
  store.close = () => store.dispatch(END);

  return store;
};
