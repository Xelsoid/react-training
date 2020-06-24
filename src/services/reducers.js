import { sortByReleaseDate, sortByRating } from '@utils/index';

export const ACTIONS = {
  STORE_MOVIES: 'STORE_MOVIES',
  CLEAR_STORE_MOVIES: 'CLEAR_STORE_MOVIES',
  FILTER_BY_RELEASE_DATE: 'FILTER_BY_RELEASE_DATE',
  FILTER_BY_RATING: 'FILTER_BY_RATING',
};

export const addMoviesDataToStore = (data) => ({
  type: ACTIONS.STORE_MOVIES,
  payload: data,
});

export const clearMoviesDataFromStore = () => ({
  type: ACTIONS.CLEAR_STORE_MOVIES,
});

export const filterByReleaseDate = () => ({
  type: ACTIONS.FILTER_BY_RELEASE_DATE,
});

export const filterByRating = () => ({
  type: ACTIONS.FILTER_BY_RATING,
});

export const reducers = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.STORE_MOVIES:
      return { ...state, moviesData: action.payload };

    case ACTIONS.CLEAR_STORE_MOVIES:
      return { ...state, moviesData: {} };

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
