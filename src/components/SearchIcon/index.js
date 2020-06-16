import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

const SearchIcon = () => (
  <NavLink type="button" className="search-icon" to="/">
    <i className="fas fa-search fa-2x fa-flip-horizontal" />
  </NavLink>
);

export default SearchIcon;
