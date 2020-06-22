import React from 'react';
import { Provider } from 'react-redux';
import store from '@store';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import ComponentExample from './index';

describe('Main test', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <ComponentExample />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
