import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SortControlPanel from '@components/SortControlPanel';
import FilmsGallery from '@components/FilmGallery';
import NotFound from '@components/NotFound';
import PropTypes from 'prop-types';
import { filterByRating, filterByReleaseDate } from '@actions';

import './index.scss';

const optionsConfig = [
  {
    radioBtnName: 'RELEASE DATE', name: 'sortBy', value: 'releaseDate',
  },
  {
    radioBtnName: 'RATING', name: 'sortBy', value: 'rating',
  },
];

const Main = ({ moviesData, filterMoviesByRating, filterMoviesByReleaseDate }) => {
  const [sortBy, setSortBy] = useState(optionsConfig[0].value);
  const getAndSetSortBy = (event) => {
    setSortBy(event.target.value);
    if (moviesData && moviesData.total) {
      if (event.target.value === optionsConfig[0].value) {
        filterMoviesByReleaseDate();
      } else {
        filterMoviesByRating();
      }
    }
  };

  return (
    <div className="main-wrapper">
      <main>
        <SortControlPanel
          optionsConfig={optionsConfig}
          total={moviesData && moviesData.data ? moviesData.data.length : 0}
          getAndSetSortBy={getAndSetSortBy}
          defaultSortValue={sortBy}
        />
        {
          moviesData && moviesData.data && moviesData.data.length
            ? <FilmsGallery films={moviesData.data} />
            : <NotFound />
        }
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({ moviesData: state.moviesData });

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(
    {
      filterMoviesByRating: filterByRating,
      filterMoviesByReleaseDate: filterByReleaseDate,
    },
    dispatch,
  )
);

Main.propTypes = {
  moviesData: PropTypes.shape({
    data: PropTypes.array,
    total: PropTypes.number,
    offset: PropTypes.number,
    limit: PropTypes.number,
  }),
  filterMoviesByRating: PropTypes.func.isRequired,
  filterMoviesByReleaseDate: PropTypes.func.isRequired,
};

Main.defaultProps = {
  moviesData: {
    data: [],
    total: 0,
    offset: 0,
    limit: 0,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
