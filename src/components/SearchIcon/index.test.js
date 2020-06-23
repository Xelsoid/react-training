import React from 'react';
import { Provider } from 'react-redux';
import store from '@store/index';
import ComponentExample from './index';

describe('SearchIcon test', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <ComponentExample />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
