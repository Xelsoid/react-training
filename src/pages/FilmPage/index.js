import React, { useEffect } from 'react';
import Header from '@components/Header';
import Main from '@components/Main';
import Footer from '@components/Footer';
import Logo from '@components/Logo';
import FilmDescription from '@components/FilmDescription';
import SearchIcon from '@components/SearchIcon';
import { useDispatch, useSelector } from 'react-redux';
import { addImageFallback } from '@utils/index';
import { useParams, useLocation } from 'react-router-dom';
import SortControlPanel from '@components/SortControlPanel';
import FilmsGallery from '@components/FilmGallery';
import NotFound from '@components/NotFound';
import { fetchMovieData, ERRORS, LOADINGS } from '@root/src/services/reducers';
import Loading from '@components/Loading';
import FetchError from '@components/FetchError';

const FilmPage = () => {
  const dispatch = useDispatch();
  const routerParams = useParams();
  const routerLocation = useLocation();

  const movieData = useSelector((state) => state.movieData);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const {
    poster_path, title, tagline, vote_average, release_date, runtime, overview, id, genres,
  } = movieData;

  useEffect(() => {
    const searchId = routerParams.id;

    if (/\/film/i.test(routerLocation.pathname) && !id && +searchId !== id) {
      dispatch(fetchMovieData(searchId));
    }
  }, []);

  const moviesData = useSelector((state) => state.moviesData);

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
        {
          loading && (loading[LOADINGS.MOVIE_LOADING] || loading[LOADINGS.MOVIES_LOADING])
            ? <Loading />
            : error && error[ERRORS.MOVIE_ERROR]
              ? <FetchError />
              : moviesData && moviesData.data && moviesData.data.length
                ? <FilmsGallery films={moviesData.data} />
                : <NotFound />
        }
      </Main>
      <Footer />
    </>
  );
};

export default FilmPage;
