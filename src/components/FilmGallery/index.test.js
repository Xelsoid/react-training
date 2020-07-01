import React from 'react';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import ComponentExample from './index';

describe('FilmGallery test', () => {
  it('renders correctly', () => {
    const component = shallow(
      <ComponentExample films={MOCKED_DATA.data} />,
    );
    expect(component).toMatchSnapshot();
  });
});
