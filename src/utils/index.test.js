import { formatIncomingData } from '@utils';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';

describe('Utils tests', () => {
  const testDataKeys = ['id', 'title', 'tagline', 'overview', 'budget', 'revenue', 'genres', 'runtime', 'voteAverage', 'voteCount', 'releaseDate', 'posterPath'];
  const film = MOCKED_DATA.data[1];
  const formattedData = formatIncomingData(film);

  it('formatIncomingData method', () => {
    expect(Object.keys(formattedData)).toEqual(testDataKeys);
  });
});
