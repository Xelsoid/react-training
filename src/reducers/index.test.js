import reducer from '@reducers';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import { sortByRating, sortByReleaseDate } from '@utils/index';
import ACTIONS from '../constants/ACTIONS';

describe('reducers tests', () => {
  const initialState = {
    moviesData: MOCKED_DATA,
  };

  it('reducer should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle STORE_MOVIES', () => {
    const action = {
      type: ACTIONS.STORE_MOVIES,
      payload: MOCKED_DATA,
    };
    expect(reducer(initialState, action)).toEqual({ ...initialState, moviesData: action.payload });
  });

  it('should handle FILTER_BY_RELEASE_DATE', () => {
    const action = {
      type: ACTIONS.FILTER_BY_RELEASE_DATE,
    };
    expect(reducer(initialState, action))
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
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      moviesData:
        { ...initialState.moviesData, data: sortByRating(initialState.moviesData.data) },
    });
  });
});
