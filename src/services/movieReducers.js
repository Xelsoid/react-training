import { sortByReleaseDate, sortByRating } from '@utils/index';
import { fetchMovies, fetchMovie } from './api';
import { handleFetchErrors, handleLoading } from '@root/src/services/commonReducers';
import { ACTIONS } from '@root/src/services/constants';
import { createReducer, createAction } from '@reduxjs/toolkit';

const initialStore = {
  moviesData: {},
  movieData: {},
};

export const addMoviesDataToStore = createAction(ACTIONS.STORE_MOVIES);
export const addMovieDataToStore = createAction(ACTIONS.STORE_MOVIE);
export const clearMoviesDataFromStore = createAction(ACTIONS.CLEAR_STORE_MOVIES);
export const filterByReleaseDate = createAction(ACTIONS.FILTER_BY_RELEASE_DATE);
export const filterByRating = createAction(ACTIONS.FILTER_BY_RATING);

export const fetchData = (method, resultHandler, fetchHandlerId) => (dispatch) => {
  dispatch(handleLoading({ id: fetchHandlerId, flag: true }));
  dispatch(handleFetchErrors({ id: fetchHandlerId, flag: false }));

  method.then((res) => {
    if (!res.ok) {
      dispatch(handleLoading({ id: fetchHandlerId, flag: false }));
      return dispatch(handleFetchErrors({ id: fetchHandlerId, error: 'Response is not okay' }));
    }
    return res.json();
  })
    .then((res) => resultHandler(res))
    .catch((error) => dispatch(handleFetchErrors({ id: fetchHandlerId, error })))
    .finally(() => dispatch(handleLoading({ id: fetchHandlerId, flag: false })));
};

export const fetchMoviesData = (searchQuery, searchByQuery, fetchHandlerId) => (dispatch) => {
  const method = fetchMovies(searchQuery, searchByQuery);
  const resultHandler = (res) => dispatch(addMoviesDataToStore({ res }));

  dispatch(fetchData(method, resultHandler, fetchHandlerId));
};

export const fetchMovieData = (movieId, fetchHandlerId) => (dispatch) => {
  const method = fetchMovie(movieId);
  const resultHandler = (res) => {
    dispatch(fetchMoviesData(res.genres[0], 'genres', fetchHandlerId));
    dispatch(addMovieDataToStore({ res }));
  };

  dispatch(fetchData(method, resultHandler, fetchHandlerId));
};

export const movieReducers = createReducer(initialStore, {
  [clearMoviesDataFromStore]: (state, action) => {
    state.moviesData = {};
  },
  [filterByReleaseDate]: (state, action) => {
    state.moviesData.data = sortByReleaseDate(state.moviesData.data);
  },
  [filterByRating]: (state, action) => {
    state.moviesData.data = sortByRating(state.moviesData.data);
  },
  [addMoviesDataToStore]: (state, action) => {
    state.moviesData = action.payload.res;
  },
  [addMovieDataToStore]: (state, action) => {
    state.movieData = action.payload.res;
  },
});
