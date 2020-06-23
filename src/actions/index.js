import ACTIONS from '@constants/ACTIONS';

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
