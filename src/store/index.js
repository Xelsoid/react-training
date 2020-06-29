import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { reducers } from '@reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducers, enhancer);

store.subscribe(
  () => { localStorage.setItem('redux', JSON.stringify(store.getState())); },
);

export default store;
