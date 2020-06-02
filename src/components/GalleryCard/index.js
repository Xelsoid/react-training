import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const GalleryCard = ({
  title, posterPath, releaseDate, genres,
}) => (
  <div className="gallery-card">
    <img alt={title} className="gallery-card__image" src={posterPath} />
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
};

export default GalleryCard;
