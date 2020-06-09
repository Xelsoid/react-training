import React from 'react';
import ComponentExample from './index';

describe('Logo test', () => {
  it('renders correctly', () => {
    const component = shallow(<ComponentExample />);
    expect(component).toMatchSnapshot();
  });
});
