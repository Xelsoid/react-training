import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SortControlPanel from '@components/SortControlPanel';
import FilmsGallery from '@components/FilmGallery';
import NotFound from '@components/NotFound';
import PropTypes from 'prop-types';
import { filterByRating, filterByReleaseDate } from '@reducers';

import './index.scss';

const optionsConfig = [
  {
    radioBtnName: 'RELEASE DATE', name: 'sortBy', value: 'releaseDate',
  },
  {
    radioBtnName: 'RATING', name: 'sortBy', value: 'rating',
  },
];

const Main = () => {
  const moviesData = useSelector((state) => state.moviesData);
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState(optionsConfig[0].value);

  const getAndSetSortBy = (event) => {
    setSortBy(event.target.value);
    if (moviesData && moviesData.total) {
      if (event.target.value === optionsConfig[0].value) {
        dispatch(filterByReleaseDate());
      } else {
        dispatch(filterByRating());
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

Main.propTypes = {
  moviesData: PropTypes.shape({
    data: PropTypes.array,
    total: PropTypes.number,
    offset: PropTypes.number,
    limit: PropTypes.number,
  }),
};

Main.defaultProps = {
  moviesData: {
    data: [],
    total: 0,
    offset: 0,
    limit: 0,
  },
};

export default Main;
