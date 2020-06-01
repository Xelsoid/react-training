import React from 'react';
import './index.scss';

const GalleryCard = ({
  film: {
    title, poster_path, release_date, genres,
  },
}) => (
  <div className="gallery-card">
    <img alt={title} className="gallery-card__image" src={poster_path} />
    <div className="gallery-card__description-line">
      <span className="gallery-card__name">{title}</span>
      <span className="gallery-card__year">{release_date.slice(0, 4)}</span>
    </div>
    <small className="gallery-card__genre">{genres.map((genre) => `${genre} `)}</small>
  </div>
);

export default GalleryCard;
