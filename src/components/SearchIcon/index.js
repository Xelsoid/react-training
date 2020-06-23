import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearMoviesDataFromStore } from '@actions/index';
import PropTypes from 'prop-types';
import './index.scss';
import { NavLink } from 'react-router-dom';

const SearchIcon = ({ clearMovies }) => (
  <NavLink type="button" className="search-icon" to="/" onClick={clearMovies}>
    <i className="fas fa-search fa-2x fa-flip-horizontal" />
  </NavLink>
);

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { clearMovies: clearMoviesDataFromStore },
  dispatch,
);

SearchIcon.propTypes = {
  clearMovies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SearchIcon);
