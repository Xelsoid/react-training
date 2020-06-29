import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import { sortByRating, sortByReleaseDate } from '@utils/index';
import {
  reducers,
  ACTIONS,
  LOADINGS,
  ERRORS,
  addMoviesDataToStore,
  addMovieDataToStore,
  handleFetchErrors,
  handleLoading,
  fetchMoviesData,
  fetchMovieData,
  clearMoviesDataFromStore,
  filterByReleaseDate,
  filterByRating,
} from './reducers';

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

  it('action fetched data errors (flag: true)', () => {
    expect(handleFetchErrors(ERRORS.MOVIES_ERROR, true)).toEqual(
      {
        type: ACTIONS.HANDLE_FETCH_ERRORS,
        payload: {
          id: ERRORS.MOVIES_ERROR,
          error: true,
        },
      },
    );
  });

  it('action fetched data errors (flag: false)', () => {
    expect(handleFetchErrors(ERRORS.MOVIES_ERROR, false)).toEqual(
      {
        type: ACTIONS.HANDLE_FETCH_ERRORS,
        payload: {
          id: ERRORS.MOVIES_ERROR,
          error: false,
        },
      },
    );
  });

  it('action fetched data loading (flag: true)', () => {
    expect(handleLoading(LOADINGS.MOVIE_LOADING, true)).toEqual(
      {
        type: ACTIONS.HANDLE_FETCH_LOADING,
        payload: {
          id: LOADINGS.MOVIE_LOADING,
          flag: true,
        },
      },
    );
  });

  it('action fetched data loading (flag: false)', () => {
    expect(handleLoading(LOADINGS.MOVIE_LOADING, false)).toEqual(
      {
        type: ACTIONS.HANDLE_FETCH_LOADING,
        payload: {
          id: LOADINGS.MOVIE_LOADING,
          flag: false,
        },
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
    expect(reducers(initialState, {})).toEqual(initialState);
  });

  it('should handle STORE_MOVIES', () => {
    const action = {
      type: ACTIONS.STORE_MOVIES,
      payload: MOCKED_DATA,
    };
    expect(reducers(initialState, action)).toEqual({ ...initialState, moviesData: action.payload });
  });

  it('should handle STORE_MOVIE', () => {
    const action = {
      type: ACTIONS.STORE_MOVIE,
      payload: MOCKED_DATA.data[0],
    };
    expect(reducers(initialState, action)).toEqual({ ...initialState, movieData: action.payload });
  });

  it('should handle CLEAR_STORE_MOVIES', () => {
    const action = {
      type: ACTIONS.CLEAR_STORE_MOVIES,
    };
    expect(reducers(initialState, action)).toEqual({ ...initialState, moviesData: {} });
  });

  it('should handle HANDLE_FETCH_ERRORS', () => {
    const action = {
      type: ACTIONS.HANDLE_FETCH_ERRORS,
      payload: {
        id: ERRORS.MOVIES_ERROR,
        error: false,
      },
    };
    expect(reducers(initialState, action)).toEqual({
      ...initialState,
      errors: {
        ...initialState.errors,
        [action.payload.id]: action.payload.error,
      },
    });
  });

  it('should handle HANDLE_FETCH_LOADING', () => {
    const action = {
      type: ACTIONS.HANDLE_FETCH_LOADING,
      payload: {
        id: LOADINGS.MOVIE_LOADING,
        flag: true,
      },
    };
    expect(reducers(initialState, action)).toEqual({
      ...initialState,
      loading: {
        ...initialState.loading,
        [action.payload.id]: action.payload.flag,
      },
    });
  });

  it('should handle FILTER_BY_RELEASE_DATE', () => {
    const action = {
      type: ACTIONS.FILTER_BY_RELEASE_DATE,
    };
    expect(reducers(initialState, action))
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
    expect(reducers(initialState, action)).toEqual({
      ...initialState,
      moviesData:
        { ...initialState.moviesData, data: sortByRating(initialState.moviesData.data) },
    });
  });
});
