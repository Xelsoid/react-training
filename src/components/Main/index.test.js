import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import { BrowserRouter } from 'react-router-dom';
import ComponentExample from './index';

const mockStore = configureStore([]);

describe('Main test', () => {
  let store;

  it('renders gallery correctly', () => {
    store = mockStore({
      moviesData: MOCKED_DATA,
    });
    const component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ComponentExample />
        </BrowserRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders not found correctly', () => {
    store = mockStore({
      moviesData: {},
    });
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
