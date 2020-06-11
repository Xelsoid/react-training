import React from 'react';
import './index.scss';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import OptionChooser from '@components/OptionChooser';
import PropTypes from 'prop-types';

const FilmSearchComponent = ({ findMovies }) => (
  <div className="film-search-wrapper">
    <h2 className="film-search__title">FIND YOUR MOVIE</h2>
    <div className="film-search__panel">
      <TextInput />
      <Button
        onClickCallback={findMovies}
        additionalClassName="btn--large"
        name="SEARCH"
      />
    </div>
    <div className="film-search__filter">
      <span className="film-search__filter-title">SEARCH BY</span>
      <OptionChooser />
    </div>
  </div>
);

FilmSearchComponent.propTypes = {
  findMovies: PropTypes.func.isRequired,
};

export default FilmSearchComponent;
