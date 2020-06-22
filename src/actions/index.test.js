import { addMoviesDataToStore, filterByReleaseDate, filterByRating } from '@actions/index';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import ACTIONS from '../constants/ACTIONS';

describe('actions test', () => {
  it('action store fetched data', () => {
    expect(addMoviesDataToStore(MOCKED_DATA)).toEqual(
      {
        type: ACTIONS.STORE_MOVIES,
        payload: MOCKED_DATA,
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
