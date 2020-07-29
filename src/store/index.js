import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from '@reducers';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const store = configureStore({
  reducer: { ...rootReducer },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(
  () => { localStorage.setItem('redux', JSON.stringify(store.getState())); },
);

export default store;
