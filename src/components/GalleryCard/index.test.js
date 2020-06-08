import React from 'react';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import ComponentExample from './index';

describe('GalleryCard test', () => {
  const film = MOCKED_DATA.data[1];
  const {
    poster_path: posterPath,
    title,
    release_date: releaseDate,
    genres,
  } = film;

  it('renders correctly', () => {
    const component = shallow(<ComponentExample
      posterPath={posterPath}
      title={title}
      releaseDate={releaseDate}
      genres={genres}
    />);
    expect(component).toMatchSnapshot();
  });
});
