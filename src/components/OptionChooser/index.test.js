import React from 'react';
import ComponentExample from './index';

describe('OptionChooser test', () => {
  it('renders correctly', () => {
    const component = shallow(<ComponentExample />);
    expect(component).toMatchSnapshot();
  });
});
