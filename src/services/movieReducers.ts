import { sortByReleaseDate, sortByRating } from '@utils/index';
import { handleFetchErrors, handleLoading } from '@root/src/services/commonReducers';
import { ACTIONS } from '@root/src/services/constants';
import { createReducer, createAction, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { fetchMovies, fetchMovie } from './api';

const initialStore = {
  moviesData: {},
  movieData: {},
};

interface MoviesInt {
    res: object;
}

type MyThunkDispatch = ThunkDispatch<{}, {}, AnyAction>;

export const addMoviesDataToStore = createAction<MoviesInt>(ACTIONS.STORE_MOVIES);
export const addMovieDataToStore = createAction<MoviesInt>(ACTIONS.STORE_MOVIE);
export const clearMoviesDataFromStore = createAction(ACTIONS.CLEAR_STORE_MOVIES);
export const filterByReleaseDate = createAction(ACTIONS.FILTER_BY_RELEASE_DATE);
export const filterByRating = createAction(ACTIONS.FILTER_BY_RATING);

export const fetchData = (method: Promise<Response>, resultHandler: any, fetchHandlerId: any) => (dispatch: MyThunkDispatch) => {
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

export const fetchMoviesData = (searchQuery: string, searchByQuery: string, fetchHandlerId: string) => (dispatch: MyThunkDispatch) => {
  const method = fetchMovies(searchQuery, searchByQuery);
  const resultHandler = (res: object) => dispatch(addMoviesDataToStore({ res }));

  dispatch(fetchData(method, resultHandler, fetchHandlerId));
};

interface ResponseInt {
    genres: Array<string>
}

export const fetchMovieData = (movieId: string, fetchHandlerId: string) => (dispatch: MyThunkDispatch) => {
  const method = fetchMovie(movieId);
  const resultHandler = (res: ResponseInt) => {
    dispatch(fetchMoviesData(res.genres[0], 'genres', fetchHandlerId));
    dispatch(addMovieDataToStore({ res }));
  };

  dispatch(fetchData(method, resultHandler, fetchHandlerId));
};

export const movieReducers = createReducer(initialStore, {
  [clearMoviesDataFromStore.type]: (state) => {
    state.moviesData = {};
  },
  [filterByReleaseDate.type]: (state) => {
    // @ts-ignore
    state.moviesData.data = sortByReleaseDate(state.moviesData.data);
  },
  [filterByRating.type]: (state) => {
    // @ts-ignore
    state.moviesData.data = sortByRating<string>(state.moviesData.data);
  },
  [addMoviesDataToStore.type]: (state, action) => {
    state.moviesData = action.payload.res;
  },
  [addMovieDataToStore.type]: (state, action) => {
    state.movieData = action.payload.res;
  },
});
