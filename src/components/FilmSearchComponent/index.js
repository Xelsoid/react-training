import React from 'react';
import './index.scss';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import OptionChooser from '@components/OptionChooser';

const FilmSearchComponent = () => (
  <div className="film-search-wrapper">
    <h2 className="film-search__title">FIND YOUR MOVIE</h2>
    <div className="film-search__panel">
      <TextInput />
      <Button />
    </div>
    <div className="film-search__filter">
      <span className="film-search__filter-title">SEARCH BY</span>
      <OptionChooser />
    </div>
  </div>
);

export default FilmSearchComponent;
