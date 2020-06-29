import React from 'react';
import ComponentExample from './index';

describe('FilmSearchComponent test', () => {
  const searchOptionsConfig = [
    {
      radioBtnName: 'TITLE', name: 'searchType', value: 'title',
    },
    {
      radioBtnName: 'GENRE', name: 'searchType', value: 'genres',
    },
  ];

  const mockCallback = jest.fn(() => {});

  it('renders correctly', () => {
    const component = shallow(
      <ComponentExample
        searchOptionsConfig={searchOptionsConfig}
        searchState=""
        getAndSetSearchState={mockCallback}
        searchByState=""
        findMoviesByButton={mockCallback}
        getAndSetSearchByState={mockCallback}
        title="FIND YOUR MOVIE"
        chooserTitle="SEARCH BY"
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
