import React, { useState, useEffect } from 'react';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import OptionChooser from '@components/OptionChooser';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { addMoviesDataToStore } from '@actions/index';
import { connect } from 'react-redux';
import './index.scss';
import { Link } from 'react-router-dom';

const optionsConfig = [
  {
    radioBtnName: 'TITLE', name: 'searchType', value: 'title',
  },
  {
    radioBtnName: 'GENRE', name: 'searchType', value: 'genres',
  },
];

const FilmSearchComponent = ({ addMovies, match }) => {
  const [searchByState, setSearchByState] = useState(optionsConfig[0].value);
  const getAndSetSearchByState = (event) => {
    setSearchByState(event.target.value);
  };

  const [searchState, setSearchState] = useState('');
  const getAndSetSearchState = (event) => {
    setSearchState(event.target.value);
  };

  const findMovies = (searchQuery, searchByQuery) => {
    const url = 'https://reactjs-cdp.herokuapp.com/movies';
    fetch(`${url}?search=${searchQuery}&searchBy=${searchByQuery}`, {})
      .then((res) => {
        if (!res.ok) {
          return res;
        }
        return res.json();
      })
      .then((res) => addMovies(res))
      .catch((error) => error);
  };

  const findMoviesByButton = () => {
    findMovies(searchState, searchByState);
  };

  useEffect(() => {
    console.log(match);
    if (/\/search\/Search/i.test(match.url)) {
      const searchQuery = match.params.searchQuery.split(' ');
      findMovies(searchQuery[1], searchQuery[2]);
    }
  }, []);

  return (
    <div className="film-search-wrapper">
      <h2 className="film-search__title">FIND YOUR MOVIE</h2>
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
        <span className="film-search__filter-title">SEARCH BY</span>
        <OptionChooser
          optionsConfig={optionsConfig}
          defaultValue={searchByState}
          onChangeCallback={getAndSetSearchByState}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { addMovies: addMoviesDataToStore },
  dispatch,
);

FilmSearchComponent.propTypes = {
  addMovies: PropTypes.func.isRequired,
  match: PropTypes.object,
};

FilmSearchComponent.defaultProps = {
  match: {},
};

export default connect(null, mapDispatchToProps)(FilmSearchComponent);
