import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addImageFallback } from '../../utils';
import { fetchMovieData } from '../../services/movieReducers';
import { FETCH_HANDLERS } from '../../services/constants';

interface GalleryCardProps {
    title: string;
    poster_path: string;
    release_date: string;
    genres: Array<string>;
    id: number;
}

interface MovieData {
    id: string;
}

interface MoviesProps {
    movies: {
        movieData: MovieData
    };
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
  title, poster_path, release_date, genres, id,
}) => {
  const dispatch = useDispatch();
  const movieData = useSelector((state: MoviesProps) => state.movies.movieData);

  const fetchMovieCallback = () => {
    if (+movieData.id === +id) {
      return;
    }
    dispatch(fetchMovieData(id, FETCH_HANDLERS.MOVIE));
  };

  return (
    <div className="gallery-card">
      <Link to={`/film/${id}`} onClick={fetchMovieCallback}>
        <img
          alt={title}
          className="gallery-card__image"
          src={poster_path}
          onError={addImageFallback}
        />
      </Link>
      <div className="gallery-card__description-line">
        <span className="gallery-card__name">{title}</span>
        <span className="gallery-card__year">{release_date.slice(0, 4)}</span>
      </div>
      <small className="gallery-card__genre">{genres.map((genre) => `${genre} `)}</small>
    </div>
  );
};
