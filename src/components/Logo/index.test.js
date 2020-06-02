import React from 'react';
import ComponentExample from './index';

describe('Component test example', () => {
  it('renders correctly', () => {
    const component = shallow(<ComponentExample />);
    expect(component).toMatchSnapshot();
  });
});
