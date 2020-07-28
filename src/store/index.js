import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { rootReducer } from '@reducers';
import { moviesSaga } from '../services/movieReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export default (initialState) => {
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(moviesSaga);
  store.runSaga = () => sagaMiddleware.run(moviesSaga);
  store.close = () => store.dispatch(END);

  return store;
};
