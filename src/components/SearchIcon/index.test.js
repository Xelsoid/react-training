import React from 'react';
import { Provider } from 'react-redux';
import store from '@store/index';
import { BrowserRouter } from 'react-router-dom';
import ComponentExample from './index';

describe('SearchIcon test', () => {
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
