import React from 'react';
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
  it('renders correctly', () => {
    const component = shallow(
      <ComponentExample
        total={4}
        optionsConfig={optionsConfig}
        getAndSetSortBy={() => {}}
        defaultSortValue={optionsConfig[0].value}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
