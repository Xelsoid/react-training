import React from 'react';
import { useDispatch } from 'react-redux';
import { clearMoviesDataFromStore } from '@root/src/services/movieReducers';
import './index.scss';
import { NavLink } from 'react-router-dom';

const SearchIcon = () => {
  const dispatch = useDispatch();
  const clearMovies = () => {
    dispatch(clearMoviesDataFromStore());
  };

  return (
    <NavLink type="button" className="search-icon" to="/" onClick={clearMovies}>
      <i className="fas fa-search fa-2x fa-flip-horizontal" />
    </NavLink>
  );
};

export default SearchIcon;
