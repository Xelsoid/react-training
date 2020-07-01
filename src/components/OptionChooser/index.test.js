import React from 'react';
import ComponentExample from './index';

describe('OptionChooser test', () => {
  const optionsConfig = [
    {
      radioBtnName: 'RELEASE DATE', name: 'sortBy', value: 'releaseDate',
    },
    {
      radioBtnName: 'RATING', name: 'sortBy', value: 'rating',
    },
  ];
  it('renders correctly', () => {
    const component = shallow(
      <ComponentExample
        optionsConfig={optionsConfig}
        defaultValue={optionsConfig[0].value}
        onChangeCallback={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
