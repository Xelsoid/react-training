import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import ComponentExample from './index';

const mockStore = configureStore([]);

describe('SearchIcon test', () => {
  let store;

  beforeEach(() => {
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
