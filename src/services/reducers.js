import { sortByReleaseDate, sortByRating } from '@utils/index';
import { fetchMovies, fetchMovie } from '@api';

export const ACTIONS = {
  STORE_MOVIES: 'STORE_MOVIES',
  STORE_MOVIE: 'STORE_MOVIE',
  HANDLE_FETCH_ERRORS: 'HANDLE_FETCH_ERRORS',
  HANDLE_FETCH_LOADING: 'HANDLE_FETCH_LOADING',
  CLEAR_STORE_MOVIES: 'CLEAR_STORE_MOVIES',
  FILTER_BY_RELEASE_DATE: 'FILTER_BY_RELEASE_DATE',
  FILTER_BY_RATING: 'FILTER_BY_RATING',
};

export const LOADINGS = {
  MOVIES_LOADING: 'moviesLoading',
  MOVIE_LOADING: 'movieLoading',
};

export const ERRORS = {
  MOVIES_ERROR: 'moviesLoading',
  MOVIE_ERROR: 'movieLoading',
};

let initialState = localStorage.getItem('redux')
  ? JSON.parse(localStorage.getItem('redux'))
  : {};

const initialStore = {
  moviesData: {},
  movieData: {},
  errors: {},
  loading: {},
};

initialState = { ...initialStore, ...initialState };

export const addMoviesDataToStore = (data) => ({
  type: ACTIONS.STORE_MOVIES,
  payload: data,
});

export const addMovieDataToStore = (data) => ({
  type: ACTIONS.STORE_MOVIE,
  payload: data,
});

export const handleFetchErrors = (id, error) => ({
  type: ACTIONS.HANDLE_FETCH_ERRORS,
  payload: {
    id,
    error,
  },
});

export const handleLoading = (id, flag) => ({
  type: ACTIONS.HANDLE_FETCH_LOADING,
  payload: {
    id,
    flag,
  },
});

export const fetchMoviesData = (searchQuery, searchByQuery) => (dispatch) => {
  dispatch(handleLoading(LOADINGS.MOVIES_LOADING, true));
  dispatch(handleFetchErrors(ERRORS.MOVIES_ERROR, false));

  fetchMovies(searchQuery, searchByQuery).then((res) => {
    if (!res.ok) {
      dispatch(handleLoading(LOADINGS.MOVIES_LOADING, false));
      return dispatch(handleFetchErrors(ERRORS.MOVIES_ERROR, 'Response is not okay'));
    }
    return res.json();
  })
    .then((res) => dispatch(addMoviesDataToStore(res)))
    .catch((error) => dispatch(handleFetchErrors(ERRORS.MOVIES_ERROR, error)))
    .finally(() => dispatch(handleLoading(LOADINGS.MOVIES_LOADING, false)));
};

export const fetchMovieData = (id) => (dispatch) => {
  dispatch(handleLoading(LOADINGS.MOVIE_LOADING, true));
  dispatch(handleFetchErrors(ERRORS.MOVIE_ERROR, false));

  fetchMovie(id).then((res) => {
    if (!res.ok) {
      dispatch(handleLoading(LOADINGS.MOVIE_LOADING, false));
      return dispatch(handleFetchErrors(ERRORS.MOVIE_ERROR, 'Response is not okay'));
    }
    return res.json();
  })
    .then((res) => {
      dispatch(fetchMoviesData(res.genres[0], 'genres'));
      dispatch(addMovieDataToStore(res));
    })
    .catch((error) => dispatch(handleFetchErrors(ERRORS.MOVIE_ERROR, error)))
    .finally(() => dispatch(handleLoading(LOADINGS.MOVIE_LOADING, false)));
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

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.STORE_MOVIES:
      return { ...state, moviesData: action.payload };

    case ACTIONS.STORE_MOVIE:
      return { ...state, movieData: action.payload };

    case ACTIONS.CLEAR_STORE_MOVIES:
      return { ...state, moviesData: {} };

    case ACTIONS.HANDLE_FETCH_ERRORS:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.id]: action.payload.error,
        },
      };

    case ACTIONS.HANDLE_FETCH_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload.id]: action.payload.flag,
        },
      };

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
