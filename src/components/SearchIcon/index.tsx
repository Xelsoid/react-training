import * as React from 'react';
import { useDispatch } from 'react-redux';
import { clearMoviesDataFromStore } from '../../services/movieReducers';
import './index.scss';
import { NavLink } from 'react-router-dom';

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
