import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '@reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const initialState = localStorage.getItem('redux')
  ? JSON.parse(localStorage.getItem('redux'))
  : {};

const store = createStore(rootReducer, initialState, enhancer);

store.subscribe(
  () => { localStorage.setItem('redux', JSON.stringify(store.getState())); },
);

export default store;
