import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import { sortByRating, sortByReleaseDate } from '@utils/index';
import { ACTIONS } from '@root/src/services/constants';
import {
  addMoviesDataToStore,
  addMovieDataToStore,
  clearMoviesDataFromStore,
  filterByReleaseDate,
  filterByRating,
  movieReducers,
} from './movieReducers';

describe('actions test', () => {
  it('action store MOVIES fetched data', () => {
    expect(addMoviesDataToStore(MOCKED_DATA)).toEqual(
      {
        type: ACTIONS.STORE_MOVIES,
        payload: MOCKED_DATA,
      },
    );
  });

  it('action store MOVIE fetched data', () => {
    expect(addMovieDataToStore(MOCKED_DATA.data[0])).toEqual(
      {
        type: ACTIONS.STORE_MOVIE,
        payload: MOCKED_DATA.data[0],
      },
    );
  });

  it('action remove fetched data', () => {
    expect(clearMoviesDataFromStore()).toEqual(
      {
        type: ACTIONS.CLEAR_STORE_MOVIES,
      },
    );
  });

  it('filter by release date action', () => {
    expect(filterByReleaseDate()).toEqual(
      {
        type: ACTIONS.FILTER_BY_RELEASE_DATE,
      },
    );
  });

  it('filter by rating action', () => {
    expect(filterByRating()).toEqual(
      {
        type: ACTIONS.FILTER_BY_RATING,
      },
    );
  });
});

describe('reducers tests', () => {
  const initialState = {
    moviesData: MOCKED_DATA,
  };

  it('reducers should return the initial state', () => {
    expect(movieReducers(initialState, {})).toEqual(initialState);
  });

  it('should handle STORE_MOVIES', () => {
    const action = {
      type: ACTIONS.STORE_MOVIES,
      payload: MOCKED_DATA,
    };
    expect(movieReducers(initialState, action)).toEqual({ ...initialState, moviesData: action.payload });
  });

  it('should handle STORE_MOVIE', () => {
    const action = {
      type: ACTIONS.STORE_MOVIE,
      payload: MOCKED_DATA.data[0],
    };
    expect(movieReducers(initialState, action)).toEqual({ ...initialState, movieData: action.payload });
  });

  it('should handle CLEAR_STORE_MOVIES', () => {
    const action = {
      type: ACTIONS.CLEAR_STORE_MOVIES,
    };
    expect(movieReducers(initialState, action)).toEqual({ ...initialState, moviesData: {} });
  });

  it('should handle FILTER_BY_RELEASE_DATE', () => {
    const action = {
      type: ACTIONS.FILTER_BY_RELEASE_DATE,
    };
    expect(movieReducers(initialState, action))
      .toEqual({
        ...initialState,
        moviesData:
          {
            ...initialState.moviesData,
            data: sortByReleaseDate(initialState.moviesData.data),
          },
      });
  });

  it('should handle FILTER_BY_RATING', () => {
    const action = {
      type: ACTIONS.FILTER_BY_RATING,
    };
    expect(movieReducers(initialState, action)).toEqual({
      ...initialState,
      moviesData:
        { ...initialState.moviesData, data: sortByRating(initialState.moviesData.data) },
    });
  });
});
