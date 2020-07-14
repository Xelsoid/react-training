import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { movieReducers, moviesSaga } from './movieReducers';
import { commonReducers } from './commonReducers';

export const rootReducer = combineReducers({ common: commonReducers, movies: movieReducers });
export function* rootSaga() {
  yield all([
    moviesSaga(),
  ]);
}
