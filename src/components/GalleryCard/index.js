import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import PropTypes from 'prop-types';

const addImageFallback = (event) => {
  const element = event.target;
  element.src = 'https://via.placeholder.com/500x750';
};

const GalleryCard = ({
  title, posterPath, releaseDate, genres, id,
}) => (
  <div className="gallery-card">
    <Link to={`/film/${id}`}>
      <img alt={title} className="gallery-card__image" src={posterPath} onError={addImageFallback} />
    </Link>
    <div className="gallery-card__description-line">
      <span className="gallery-card__name">{title}</span>
      <span className="gallery-card__year">{releaseDate.slice(0, 4)}</span>
    </div>
    <small className="gallery-card__genre">{genres.map((genre) => `${genre} `)}</small>
  </div>
);

GalleryCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default GalleryCard;
