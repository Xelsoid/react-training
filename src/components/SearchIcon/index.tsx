import * as React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearMoviesDataFromStore } from '../../services/movieReducers';
import './index.scss';

export const SearchIcon = () => {
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
