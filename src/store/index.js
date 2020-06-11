/* eslint-disable no-underscore-dangle */
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '@reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const initialState = {};
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducers, initialState, enhancer);

export default store;
