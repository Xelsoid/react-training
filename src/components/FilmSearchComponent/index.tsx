import * as React from 'react';
import { TextInput } from '@components/TextInput/index';
import { Button } from '@components/Button/index';
import { OptionChooser } from '@components/OptionChooser/index';
import './index.scss';
import { Link } from 'react-router-dom';

interface FilmSearchComponentProps {
    searchOptionsConfig: Array<any>;
    searchState: string;
    getAndSetSearchState: (e: React.ChangeEvent) => void;
    searchByState: string;
    findMoviesByButton: (e: React.MouseEvent) => void;
    getAndSetSearchByState: (e: React.ChangeEvent) => void;
    title: string;
    chooserTitle: string;
}

export const FilmSearchComponent = ({
  searchOptionsConfig,
  searchState,
  getAndSetSearchState,
  searchByState,
  findMoviesByButton,
  getAndSetSearchByState,
  title,
  chooserTitle,
}: FilmSearchComponentProps) => (
  <div className="film-search-wrapper">
    <h2 className="film-search__title">{title}</h2>
    <div className="film-search__panel">
      <TextInput
        type="text"
        placeholder="Enter the data"
        defaultValue={searchState}
        onChangeCallback={getAndSetSearchState}
      />
      <Link to={`/search/Search ${searchState} ${searchByState}`}>
        <Button
          onClickCallback={findMoviesByButton}
          additionalClassName="btn--large"
          name="SEARCH"
          type="button"
        />
      </Link>

    </div>
    <div className="film-search__filter">
      <span className="film-search__filter-title">{chooserTitle}</span>
      <OptionChooser
        optionsConfig={searchOptionsConfig}
        defaultValue={searchByState}
        onChangeCallback={getAndSetSearchByState}
      />
    </div>
  </div>
);
