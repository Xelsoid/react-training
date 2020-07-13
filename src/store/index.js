import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '@reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default (initialState) => {
  return createStore(rootReducer, initialState, enhancer);
};
