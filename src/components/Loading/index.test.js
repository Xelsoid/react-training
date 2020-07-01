import React from 'react';
import ComponentExample from './index';

describe('Loading test', () => {
  it('renders correctly', () => {
    const component = shallow(<ComponentExample />);
    expect(component).toMatchSnapshot();
  });
});
