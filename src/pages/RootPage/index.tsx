import * as React from 'react';
import { useEffect, useState } from 'react';
import { Header } from '@components/Header/index';
import { Main } from '@components/Main/index';
import { Footer } from '@components/Footer/index';
import { Logo } from '@components/Logo/index';
import { FilmSearchComponent } from '@components/FilmSearchComponent/index';
import { SortControlPanel } from '@components/SortControlPanel/index';
import { FilmsGallery } from '@components/FilmGallery/index';
import { NotFound } from '@components/NotFound/index';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { OptionChooser } from '@components/OptionChooser/index';
import { FetchResult } from '@components/FetchResult/index';
import {
  filterByRating, filterByReleaseDate, fetchMoviesData,
} from '../../services/movieReducers';
import { FETCH_HANDLERS } from '../../services/constants';

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

interface CommonProps {
    common: {
        loading: string,
        error: string
    };
}

interface MovieProps {
    data: Array<any>;
    total: number;
}

interface MoviesProps {
    movies: {
        moviesData: MovieProps;
    }
}

interface SearchQuery {
    searchQuery: string;
}

const useCustomHook = () => {
  const dispatch = useDispatch();
  const routerParams: SearchQuery = useParams();
  const routerLocation = useLocation();
  const loading = useSelector<CommonProps>((state) => state.common.loading);
  const error = useSelector<CommonProps>((state) => state.common.error);
  const moviesData = useSelector((state: MoviesProps) => state.movies.moviesData);

  return {
    dispatch, routerParams, routerLocation, loading, error, moviesData,
  };
};

export const RootPage = () => {
  const {
    dispatch, routerParams, routerLocation, loading, error, moviesData,
  } = useCustomHook();

  const [sortBy, setSortBy] = useState(optionsConfig[0].value);

  const [searchState, setSearchState] = useState('');
  const getAndSetSearchState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState(event.target.value);
  };

  const [searchByState, setSearchByState] = useState(searchOptionsConfig[0].value);
  const getAndSetSearchByState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchByState(event.target.value);
  };

  const findMovies = (searchQuery: string, searchByQuery: string) => {
    dispatch(fetchMoviesData(searchQuery, searchByQuery, FETCH_HANDLERS.MOVIE));
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

  const getAndSetSortBy = (event: React.ChangeEvent<HTMLInputElement>) => {
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
