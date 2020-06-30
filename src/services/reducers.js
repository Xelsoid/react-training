import { combineReducers } from 'redux';
import { movieReducers } from './movieReducers';
import { commonReducers } from './commonReducers';

export default combineReducers({ common: commonReducers, movies: movieReducers });
