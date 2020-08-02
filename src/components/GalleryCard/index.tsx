import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { addImageFallback } from '../../utils/index';
import { fetchMovieData } from '../../services/movieReducers';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_HANDLERS } from '../../services/constants';

interface GalleryCardProps {
    title: string;
    poster_path: string;
    release_date: string;
    genres: Array<String>;
    id: number;
}

export const GalleryCard = ({
  title, poster_path, release_date, genres, id,
}: GalleryCardProps) => {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movies.movieData);

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