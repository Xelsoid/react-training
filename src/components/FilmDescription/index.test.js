import React from 'react';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import ComponentExample from './index';

describe('Component test example', () => {
  it('renders correctly', () => {
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
