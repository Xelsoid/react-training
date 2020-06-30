import { sortByReleaseDate, sortByRating } from '@utils/index';
import { fetchMovies, fetchMovie } from '@api';
import { handleFetchErrors, handleLoading } from '@root/src/services/commonReducers';
import { ACTIONS, ERRORS, LOADINGS } from '@root/src/services/constants';

const initialStore = {
  moviesData: {},
  movieData: {},
};

export const addMoviesDataToStore = (data) => ({
  type: ACTIONS.STORE_MOVIES,
  payload: data,
});

export const addMovieDataToStore = (data) => ({
  type: ACTIONS.STORE_MOVIE,
  payload: data,
});

export const fetchData = (method, resultHandler) => (dispatch) => {
  dispatch(handleLoading(LOADINGS.MOVIES_LOADING, true));
  dispatch(handleFetchErrors(ERRORS.MOVIES_ERROR, false));

  method.then((res) => {
    if (!res.ok) {
      dispatch(handleLoading(LOADINGS.MOVIES_LOADING, false));
      return dispatch(handleFetchErrors(ERRORS.MOVIES_ERROR, 'Response is not okay'));
    }
    return res.json();
  })
    .then((res) => resultHandler(res))
    .catch((error) => dispatch(handleFetchErrors(ERRORS.MOVIES_ERROR, error)))
    .finally(() => dispatch(handleLoading(LOADINGS.MOVIES_LOADING, false)));
};

export const fetchMoviesData = (searchQuery, searchByQuery) => (dispatch) => {
  const method = fetchMovies(searchQuery, searchByQuery);
  const resultHandler = (res) => dispatch(addMoviesDataToStore(res));

  dispatch(fetchData(method, resultHandler));
};

export const fetchMovieData = (id) => (dispatch) => {
  const method = fetchMovie(id);
  const resultHandler = (res) => {
    dispatch(fetchMoviesData(res.genres[0], 'genres'));
    dispatch(addMovieDataToStore(res));
  };

  dispatch(fetchData(method, resultHandler));
};

export const clearMoviesDataFromStore = () => ({
  type: ACTIONS.CLEAR_STORE_MOVIES,
});

export const filterByReleaseDate = () => ({
  type: ACTIONS.FILTER_BY_RELEASE_DATE,
});

export const filterByRating = () => ({
  type: ACTIONS.FILTER_BY_RATING,
});

export const movieReducers = (state = initialStore, action) => {
  switch (action.type) {
    case ACTIONS.STORE_MOVIES:
      return { ...state, moviesData: action.payload };

    case ACTIONS.STORE_MOVIE:
      return { ...state, movieData: action.payload };

    case ACTIONS.CLEAR_STORE_MOVIES:
      return { ...state, moviesData: {} };

    case ACTIONS.FILTER_BY_RELEASE_DATE:
      return {
        ...state,
        moviesData: {
          ...state.moviesData,
          data: sortByReleaseDate(state.moviesData.data),
        },
      };

    case ACTIONS.FILTER_BY_RATING:
      return {
        ...state,
        moviesData: {
          ...state.moviesData,
          data: sortByRating(state.moviesData.data),
        },
      };

    default:
      return state;
  }
};
