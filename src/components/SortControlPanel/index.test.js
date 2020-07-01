import React from 'react';
import OptionChooser from '@components/OptionChooser';
import ComponentExample from './index';

describe('SortControlPanel test', () => {
  const optionsConfig = [
    {
      radioBtnName: 'TITLE', name: 'searchType', value: 'title',
    },
    {
      radioBtnName: 'GENRE', name: 'searchType', value: 'genres',
    },
  ];

  const mockCallback = jest.fn(() => {});

  it('renders correctly with child component', () => {
    const component = shallow(
      <ComponentExample
        title="Films by drama genre"
        filterTitle="SORT BY"
      >
        <OptionChooser
          optionsConfig={optionsConfig}
          onChangeCallback={mockCallback}
          defaultValue={optionsConfig[0].value}
        />
      </ComponentExample>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders correctly without child component', () => {
    const component = shallow(
      <ComponentExample
        title="Films by drama genre"
        filterTitle="SORT BY"
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
