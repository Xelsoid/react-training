import React from 'react';
import ComponentExample from './index';

describe('TextInput test', () => {
  it('renders correctly', () => {
    const component = shallow(
      <ComponentExample
        type="text"
        placeholder="just placeholder"
        onChangeCallback={() => {}}
        defaultValue="value"
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
