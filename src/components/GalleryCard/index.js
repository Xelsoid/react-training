import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { addImageFallback } from '@utils/index';
import { fetchMovieDataRequest } from '@root/src/services/movieReducers';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FETCH_HANDLERS } from '@root/src/services/constants';

const GalleryCard = ({
  title, poster_path, release_date, genres, id,
}) => {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movies.movieData);

  const fetchMovieCallback = () => {
    if (+movieData.id === +id) {
      return;
    }
    dispatch(fetchMovieDataRequest(id, FETCH_HANDLERS.MOVIE));
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

GalleryCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default GalleryCard;
