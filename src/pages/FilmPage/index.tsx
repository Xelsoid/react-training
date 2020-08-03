import * as React from 'react';
import { useEffect } from 'react';
import { Header } from '@components/Header/index';
import { Main } from '@components/Main/index';
import { Footer } from '@components/Footer/index';
import { Logo } from '@components/Logo/index';
import { FilmDescription } from '@components/FilmDescription/index.tsx';
import { SearchIcon } from '@components/SearchIcon/index';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { SortControlPanel } from '@components/SortControlPanel/index';
import { FilmsGallery } from '@components/FilmGallery/index';
import { NotFound } from '@components/NotFound/index';
import { FetchResult } from '@components/FetchResult';
import { fetchMovieData } from '../../services/movieReducers';
import { addImageFallback } from '../../utils';
import { FETCH_HANDLERS } from '../../services/constants';

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

interface FilmProps {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    genres: string[];
    runtime: number;
}

interface RouterParamsProps {
    id: string
}

interface MoviesProps {
    movies: {
        moviesData: MovieProps;
        movieData: FilmProps;
    }
}

const useCustomHook = () => {
  const dispatch = useDispatch();
  const routerParams: RouterParamsProps = useParams();
  const routerLocation = useLocation();
  const movieData = useSelector((state: MoviesProps) => state.movies.movieData);
  const moviesData = useSelector((state: MoviesProps) => state.movies.moviesData);
  const loading = useSelector((state: CommonProps) => state.common.loading);
  const error = useSelector((state: CommonProps) => state.common.error);

  return {
    dispatch, routerParams, routerLocation, movieData, moviesData, loading, error,
  };
};

export const FilmPage = () => {
  const {
    dispatch, routerParams, routerLocation, movieData, moviesData, loading, error,
  } = useCustomHook();
  const {
    poster_path, title, tagline, vote_average, release_date, runtime, overview, id, genres,
  } = movieData;

  useEffect(() => {
    const searchId = routerParams.id;

    if (/\/film/i.test(routerLocation.pathname) && !id && +searchId !== id) {
      dispatch(fetchMovieData(searchId, FETCH_HANDLERS.MOVIE));
    }
  }, []);

  const headerChildren = {
    upperChild:
  <>
    <Logo />
    <SearchIcon />
  </>,
    middleChild:
  <FilmDescription
    title={title}
    poster_path={poster_path}
    addImageFallback={addImageFallback}
    release_date={release_date}
    genres={genres}
    id={id}
    runtime={runtime}
    overview={overview}
    vote_average={vote_average}
    tagline={tagline}
  />,
  };

  return (
    <>
      <Header
        headerChildren={headerChildren}
      />
      <Main>
        <SortControlPanel title={`Films by ${genres && genres[0]} genre`} />
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
