import { sortByReleaseDate, sortByRating } from '@utils/index';
import { fetchMovies, fetchMovie } from '@api';
import { handleFetchErrors, handleLoading } from '@root/src/services/commonReducers';
import { ACTIONS } from '@root/src/services/constants';

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

export const fetchData = (method, resultHandler, fetchHandlerId) => (dispatch) => {
  dispatch(handleLoading(fetchHandlerId, true));
  dispatch(handleFetchErrors(fetchHandlerId, false));

  method.then((res) => {
    if (!res.ok) {
      dispatch(handleLoading(fetchHandlerId, false));
      return dispatch(handleFetchErrors(fetchHandlerId, 'Response is not okay'));
    }
    return res.json();
  })
    .then((res) => resultHandler(res))
    .catch((error) => dispatch(handleFetchErrors(fetchHandlerId, error)))
    .finally(() => dispatch(handleLoading(fetchHandlerId, false)));
};

export const fetchMoviesData = (searchQuery, searchByQuery, fetchHandlerId) => (dispatch) => {
  const method = fetchMovies(searchQuery, searchByQuery);
  const resultHandler = (res) => dispatch(addMoviesDataToStore(res));

  dispatch(fetchData(method, resultHandler, fetchHandlerId));
};

export const fetchMovieData = (movieId, fetchHandlerId) => (dispatch) => {
  const method = fetchMovie(movieId);
  const resultHandler = (res) => {
    dispatch(fetchMoviesData(res.genres[0], 'genres', fetchHandlerId));
    dispatch(addMovieDataToStore(res));
  };

  dispatch(fetchData(method, resultHandler, fetchHandlerId));
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
