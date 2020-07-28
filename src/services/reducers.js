import { combineReducers } from 'redux';
import { movieReducers } from './movieReducers';
import { commonReducers } from './commonReducers';

export const rootReducer = combineReducers({ common: commonReducers, movies: movieReducers });
