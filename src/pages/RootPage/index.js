import React, { useState } from 'react';
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
  filterByRating, filterByReleaseDate, fetchMoviesDataRequest,
} from '@root/src/services/movieReducers';
import { useParams, useLocation } from 'react-router-dom';
import OptionChooser from '@components/OptionChooser';
import FetchResult from '@components/FetchResult';
import { FETCH_HANDLERS } from '@root/src/services/constants';

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
    dispatch, loading, error, moviesData,
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
    dispatch(fetchMoviesDataRequest(searchQuery, searchByQuery, FETCH_HANDLERS.MOVIE));
  };

  const findMoviesByButton = () => {
    findMovies(searchState, searchByState);
  };

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

        <FetchResult loading={loading} error={error} handlerId={FETCH_HANDLERS.MOVIE}>
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
