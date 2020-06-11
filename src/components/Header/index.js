import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Logo from '@components/Logo';
import FilmDescription from '@components/FilmDescription';
import FilmSearchComponent from '@components/FilmSearchComponent';
import SearchIcon from '@components/SearchIcon';

import './index.scss';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';

import { makeFetch } from '@utils/index';
import { addMoviesDataToStore } from '@actions/index';
import PropTypes from 'prop-types';

const Header = ({ addMovies, moviesList }) => {
  const film = moviesList;
  console.log(film);

  const findMovies = () => {
    makeFetch(
      'https://reactjs-cdp.herokuapp.com/movies',
      {},
      addMovies,
    );
  };

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header__logo-wrapper">
          <Logo />
          {/* <SearchIcon/> */}
        </div>

        <FilmSearchComponent
          findMovies={findMovies}
        />
        {/* <FilmDescription */}
        {/*  posterPath={film.poster_path} */}
        {/*  title={film.title} */}
        {/*  tagline={film.tagline} */}
        {/*  voteAverage={film.vote_average} */}
        {/*  releaseDate={film.release_date} */}
        {/*  runtime={film.runtime} */}
        {/*  overview={film.overview} */}
        {/* /> */}
      </header>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { addMovies: addMoviesDataToStore },
  dispatch,
);

const mapStateToProps = (state) => ({ moviesList: state.moviesData });

Header.propTypes = {
  addMovies: PropTypes.func.isRequired,
  moviesList: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
