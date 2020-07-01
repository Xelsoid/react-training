import React from 'react';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import OptionChooser from '@components/OptionChooser';
import PropTypes from 'prop-types';
import './index.scss';
import { Link } from 'react-router-dom';

const FilmSearchComponent = ({
  searchOptionsConfig,
  searchState,
  getAndSetSearchState,
  searchByState,
  findMoviesByButton,
  getAndSetSearchByState,
  title,
  chooserTitle,
}) => (
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

FilmSearchComponent.propTypes = {
  searchOptionsConfig: PropTypes.array.isRequired,
  searchState: PropTypes.string.isRequired,
  getAndSetSearchState: PropTypes.func.isRequired,
  searchByState: PropTypes.string.isRequired,
  findMoviesByButton: PropTypes.func.isRequired,
  getAndSetSearchByState: PropTypes.func.isRequired,
  title: PropTypes.string,
  chooserTitle: PropTypes.string,
};

FilmSearchComponent.defaultProps = {
  title: 'SEARCH',
  chooserTitle: 'SEARCH BY',
};

export default FilmSearchComponent;
