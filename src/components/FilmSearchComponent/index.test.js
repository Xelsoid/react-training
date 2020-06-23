import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import { BrowserRouter } from 'react-router-dom';
import ComponentExample from './index';

const mockStore = configureStore([]);

describe('FilmSearchComponent test', () => {
  let store;

  beforeEach(() => {
    fetchMock.doMock();
    store = mockStore({
      moviesData: MOCKED_DATA,
    });
  });

  it('renders correctly', () => {
    const component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ComponentExample />
        </BrowserRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
