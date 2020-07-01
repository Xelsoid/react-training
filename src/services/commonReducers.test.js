import { ACTIONS, FETCH_HANDLERS } from '@root/src/services/constants';
import { handleFetchErrors, handleLoading, commonReducers } from './commonReducers';

describe('actions test', () => {
  it('action fetched data errors (flag: true)', () => {
    expect(handleFetchErrors(FETCH_HANDLERS.MOVIE, true)).toEqual(
      {
        type: ACTIONS.HANDLE_FETCH_ERRORS,
        payload: {
          id: FETCH_HANDLERS.MOVIE,
          error: true,
        },
      },
    );
  });

  it('action fetched data errors (flag: false)', () => {
    expect(handleFetchErrors(FETCH_HANDLERS.MOVIE, false)).toEqual(
      {
        type: ACTIONS.HANDLE_FETCH_ERRORS,
        payload: {
          id: FETCH_HANDLERS.MOVIE,
          error: false,
        },
      },
    );
  });

  it('action fetched data loading (flag: true)', () => {
    expect(handleLoading(FETCH_HANDLERS.MOVIE, true)).toEqual(
      {
        type: ACTIONS.HANDLE_FETCH_LOADING,
        payload: {
          id: FETCH_HANDLERS.MOVIE,
          flag: true,
        },
      },
    );
  });

  it('action fetched data loading (flag: false)', () => {
    expect(handleLoading(FETCH_HANDLERS.MOVIE, false)).toEqual(
      {
        type: ACTIONS.HANDLE_FETCH_LOADING,
        payload: {
          id: FETCH_HANDLERS.MOVIE,
          flag: false,
        },
      },
    );
  });
});

describe('reducers tests', () => {
  const initialState = {
    errors: {},
    loading: {},
  };

  it('reducers should return the initial state', () => {
    expect(commonReducers(initialState, {})).toEqual(initialState);
  });

  it('should handle HANDLE_FETCH_ERRORS', () => {
    const action = {
      type: ACTIONS.HANDLE_FETCH_ERRORS,
      payload: {
        id: FETCH_HANDLERS.MOVIE,
        error: false,
      },
    };
    expect(commonReducers(initialState, action)).toEqual({
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
        id: FETCH_HANDLERS.MOVIE,
        flag: true,
      },
    };
    expect(commonReducers(initialState, action)).toEqual({
      ...initialState,
      loading: {
        ...initialState.loading,
        [action.payload.id]: action.payload.flag,
      },
    });
  });
});
