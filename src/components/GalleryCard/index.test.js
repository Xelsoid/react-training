import React from 'react';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ComponentExample from './index';

const mockStore = configureStore([]);

describe('GalleryCard test', () => {
  let store;
  const film = MOCKED_DATA.data[1];

  beforeEach(() => {
    store = mockStore({
      movieData: film,
    });
  });

  it('renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <ComponentExample {...film} />
      </Provider>,

    );
    expect(component).toMatchSnapshot();
  });
});
