import { sortByReleaseDate, sortByRating } from '@utils/index';
import { fetchData } from '@api';

export const ACTIONS = {
  STORE_MOVIES: 'STORE_MOVIES',
  FETCH_MOVIES: 'FETCH_MOVIES',
  HANDLE_FETCH_ERRORS: 'HANDLE_FETCH_ERRORS',
  CLEAR_STORE_MOVIES: 'CLEAR_STORE_MOVIES',
  FILTER_BY_RELEASE_DATE: 'FILTER_BY_RELEASE_DATE',
  FILTER_BY_RATING: 'FILTER_BY_RATING',
};

const initialStore = {
  moviesData: {},
  errors: {},
  loaders: {},
};

export const addMoviesDataToStore = (data) => ({
  type: ACTIONS.STORE_MOVIES,
  payload: data,
});

export const handleFetchErrors = (errorId, error) => ({
  type: ACTIONS.HANDLE_FETCH_ERRORS,
  payload: {
    errorId,
    error,
  },
});

export const fetchMoviesData = (searchQuery, searchByQuery) => (dispatch) => {
  fetchData(searchQuery, searchByQuery).then((res) => {
    if (!res.ok) {
      return res;
    }
    return res.json();
  })
    .then((res) => dispatch(addMoviesDataToStore(res)))
    .catch((error) => dispatch(handleFetchErrors('movieLoading', error)));
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

export const reducers = (state = initialStore, action) => {
  switch (action.type) {
    case ACTIONS.STORE_MOVIES:
      return { ...state, moviesData: action.payload };

    case ACTIONS.CLEAR_STORE_MOVIES:
      return { ...state, moviesData: {} };

    case ACTIONS.HANDLE_FETCH_ERRORS:
      return {
        ...state,
        errors: {
          [action.payload.errorId]: action.payload.error,
        },
      };

    case ACTIONS.FILTER_BY_RELEASE_DATE:
      return {
        ...state,
        moviesData:
          { ...state.moviesData, data: sortByReleaseDate(state.moviesData.data) },
      };

    case ACTIONS.FILTER_BY_RATING:
      return {
        ...state,
        moviesData:
          { ...state.moviesData, data: sortByRating(state.moviesData.data) },
      };

    default:
      return state;
  }
};
