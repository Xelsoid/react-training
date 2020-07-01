import { formatIncomingData, addImageFallback } from '@utils';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';

describe('Utils tests', () => {
  const film = MOCKED_DATA.data[1];

  it('formatIncomingData method', () => {
    const testDataKeys = ['id', 'title', 'tagline', 'overview', 'budget', 'revenue', 'genres', 'runtime', 'voteAverage', 'voteCount', 'releaseDate', 'posterPath'];
    const formattedData = formatIncomingData(film);
    expect(Object.keys(formattedData)).toEqual(testDataKeys);
  });

  it('addImageFallback method', () => {
    const mockedSrc = 'https://github.com';
    const mockedEvent = {
      target: {
        src: mockedSrc,
      },
    };

    addImageFallback(mockedEvent);
    expect(mockedSrc !== mockedEvent.target.src).toBeTruthy();
  });
});
