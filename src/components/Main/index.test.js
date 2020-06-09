import React from 'react';
import ComponentExample from './index';

describe('Main test', () => {
  it('renders correctly', () => {
    const component = shallow(<ComponentExample />);
    expect(component).toMatchSnapshot();
  });
});
