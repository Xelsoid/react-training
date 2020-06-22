import React from 'react';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import { Provider } from 'react-redux';
import store from '@store';
import ComponentExample from './index';

describe('FilmGallery test', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <ComponentExample films={MOCKED_DATA.data} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
