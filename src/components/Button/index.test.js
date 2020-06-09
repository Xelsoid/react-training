import React from 'react';
import ComponentExample from './index';

describe('Button test', () => {
  it('renders correctly', () => {
    const component = shallow(<ComponentExample />);
    expect(component).toMatchSnapshot();
  });
});
