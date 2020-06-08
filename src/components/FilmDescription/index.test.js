import React from 'react';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import ComponentExample from './index';

describe('FilmDescription test', () => {
  const film = MOCKED_DATA.data[1];
  const {
    poster_path: posterPath,
    title,
    tagline,
    vote_average: voteAverage,
    release_date: releaseDate,
    runtime,
    overview,
  } = film;

  it('renders correctly', () => {
    const component = shallow(<ComponentExample
      posterPath={posterPath}
      title={title}
      tagline={tagline}
      voteAverage={voteAverage}
      releaseDate={releaseDate}
      runtime={runtime}
      overview={overview}
    />);
    expect(component).toMatchSnapshot();
  });
});
