import React, { useState, useEffect } from 'react';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import OptionChooser from '@components/OptionChooser';
import PropTypes from 'prop-types';
import { fetchMoviesData } from '@reducers';
import { useDispatch } from 'react-redux';
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

const FilmSearchComponent = ({ match }) => {
  const dispatch = useDispatch();

  const [searchState, setSearchState] = useState('');
  const getAndSetSearchState = (event) => {
    setSearchState(event.target.value);
  };

  const [searchByState, setSearchByState] = useState(optionsConfig[0].value);
  const getAndSetSearchByState = (event) => {
    setSearchByState(event.target.value);
  };

  const findMovies = (searchQuery, searchByQuery) => {
    dispatch(fetchMoviesData(searchQuery, searchByQuery));
  };

  const findMoviesByButton = () => {
    findMovies(searchState, searchByState);
  };

  useEffect(() => {
    if (/\/search\/Search/i.test(match.url)) {
      const searchQuery = match.params.searchQuery.split(' ');
      setSearchState(searchQuery[1]);
      setSearchByState(searchQuery[2]);
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

FilmSearchComponent.propTypes = {
  match: PropTypes.object,
};

FilmSearchComponent.defaultProps = {
  match: {},
};

export default FilmSearchComponent;
