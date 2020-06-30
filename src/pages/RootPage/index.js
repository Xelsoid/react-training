import React, { useEffect, useState } from 'react';
import Header from '@components/Header';
import Main from '@components/Main';
import Footer from '@components/Footer';
import Logo from '@components/Logo';
import FilmSearchComponent from '@components/FilmSearchComponent';
import SortControlPanel from '@components/SortControlPanel';
import FilmsGallery from '@components/FilmGallery';
import NotFound from '@components/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterByRating, filterByReleaseDate, fetchMoviesData,
} from '@root/src/services/movieReducers';
import { ERRORS, LOADINGS } from '@root/src/services/constants';
import { useParams, useLocation } from 'react-router-dom';
import OptionChooser from '@components/OptionChooser';
import Loading from '@components/Loading';

import FetchError from '@components/FetchError';
import FetchResult from '@components/FetchResult';

const optionsConfig = [
  {
    radioBtnName: 'RELEASE DATE', name: 'sortBy', value: 'releaseDate',
  },
  {
    radioBtnName: 'RATING', name: 'sortBy', value: 'rating',
  },
];

const searchOptionsConfig = [
  {
    radioBtnName: 'TITLE', name: 'searchType', value: 'title',
  },
  {
    radioBtnName: 'GENRE', name: 'searchType', value: 'genres',
  },
];

const useCustomHook = () => {
  const dispatch = useDispatch();
  const routerParams = useParams();
  const routerLocation = useLocation();
  const loading = useSelector((state) => state.common.loading);
  const error = useSelector((state) => state.common.error);
  const moviesData = useSelector((state) => state.movies.moviesData);

  return {
    dispatch, routerParams, routerLocation, loading, error, moviesData,
  };
};

const RootPage = () => {
  const {
    dispatch, routerParams, routerLocation, loading, error, moviesData,
  } = useCustomHook();

  const [sortBy, setSortBy] = useState(optionsConfig[0].value);

  const [searchState, setSearchState] = useState('');
  const getAndSetSearchState = (event) => {
    setSearchState(event.target.value);
  };

  const [searchByState, setSearchByState] = useState(searchOptionsConfig[0].value);
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
    if (/\/search\/Search/i.test(routerLocation.pathname)) {
      const searchQuery = routerParams.searchQuery.split(' ');
      setSearchState(searchQuery[1]);
      setSearchByState(searchQuery[2]);
      findMovies(searchQuery[1], searchQuery[2]);
    }
  }, []);

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

  const headerChildren = {
    upperChild: <Logo />,
    middleChild:
  <FilmSearchComponent
    searchOptionsConfig={searchOptionsConfig}
    searchState={searchState}
    getAndSetSearchState={getAndSetSearchState}
    searchByState={searchByState}
    findMoviesByButton={findMoviesByButton}
    getAndSetSearchByState={getAndSetSearchByState}
    title="FIND YOUR MOVIE"
    chooserTitle="SEARCH BY"
  />,
  };

  return (
    <>
      <Header
        headerChildren={headerChildren}
      />
      <Main>
        <SortControlPanel
          title={`${moviesData && moviesData.data ? moviesData.data.length : 0} movies found`}
          filterTitle="SORT BY"
        >
          <OptionChooser
            optionsConfig={optionsConfig}
            defaultValue={sortBy}
            onChangeCallback={getAndSetSortBy}
          />
        </SortControlPanel>

        <FetchResult loading={loading} error={error}>
          {
            moviesData && moviesData.data && moviesData.data.length
              ? <FilmsGallery films={moviesData.data} />
              : <NotFound />
          }
        </FetchResult>
      </Main>
      <Footer />
    </>
  );
};

export default RootPage;
