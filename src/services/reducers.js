import { sortByReleaseDate, sortByRating } from '@utils/index';
import { fetchData } from '@api';

export const ACTIONS = {
  STORE_MOVIES: 'STORE_MOVIES',
  FETCH_MOVIES: 'FETCH_MOVIES',
  HANDLE_FETCH_ERRORS: 'HANDLE_FETCH_ERRORS',
  HANDLE_FETCH_LOADING: 'HANDLE_FETCH_LOADING',
  CLEAR_STORE_MOVIES: 'CLEAR_STORE_MOVIES',
  FILTER_BY_RELEASE_DATE: 'FILTER_BY_RELEASE_DATE',
  FILTER_BY_RATING: 'FILTER_BY_RATING',
};

const initialStore = {
  moviesData: {},
  errors: {},
  loading: {},
};

export const addMoviesDataToStore = (data) => ({
  type: ACTIONS.STORE_MOVIES,
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
  const dataType = 'movieLoading';
  dispatch(handleLoading(dataType, true));
  dispatch(handleFetchErrors(dataType, false));

  fetchData(searchQuery, searchByQuery).then((res) => {
    if (!res.ok) {
      dispatch(handleLoading(dataType, false));
      return dispatch(handleFetchErrors(dataType, 'Response is not okay'));
    }
    return res.json();
  })
    .then((res) => dispatch(addMoviesDataToStore(res)))
    .catch((error) => dispatch(handleFetchErrors(dataType, error)))
    .finally(() => dispatch(handleLoading(dataType, false)));
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

    case ACTIONS.HANDLE_FETCH_LOADING:
      return {
        ...state,
        loading: {
          [action.payload.id]: action.payload.flag,
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
