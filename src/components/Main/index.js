import React from 'react';
import { connect } from 'react-redux';
import SortControlPanel from '@components/SortControlPanel';
import FilmsGallery from '@components/FilmGallery';
import NotFound from '@components/NotFound';

import './index.scss';
import PropTypes from 'prop-types';

const Main = ({ moviesList }) => (
  <div className="main-wrapper">
    <main className="main-">
      <SortControlPanel />
      {
        moviesList && moviesList.data && moviesList.data.length
          ? <FilmsGallery films={moviesList.data} />
          : <NotFound />
      }
    </main>
  </div>
);

const mapStateToProps = (state) => ({ moviesList: state.moviesData });

Main.propTypes = {
  moviesList: PropTypes.object,
};

Main.defaultProps = {
  moviesList: null,
};

export default connect(mapStateToProps)(Main);
