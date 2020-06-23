import React from 'react';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ComponentExample from './index';

const mockStore = configureStore([]);

describe('FilmDescription test', () => {
  let store;
  const match = {
    params: {
      id: '337167',
    },
  };

  beforeEach(() => {
    store = mockStore({
      moviesData: MOCKED_DATA,
    });
  });

  it('renders correctly', () => {
    const component = mount(
      <Provider store={store}>
        <ComponentExample match={match} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
