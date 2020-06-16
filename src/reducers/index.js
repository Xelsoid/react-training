import ACTIONS from '@constants/ACTIONS';
import { sortByReleaseDate, sortByRating } from '@utils/index';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.STORE_MOVIES:
      return { ...state, moviesData: action.payload };

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
