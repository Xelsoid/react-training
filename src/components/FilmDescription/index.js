import React from 'react';
import './index.scss';

const FilmDescription = ({film: {poster_path, title, tagline, vote_average, release_date, runtime, overview}}) => (
  <div className="film-description">
    <div className="film-description__image-wrapper">
      <img alt={title} className="film-description__image" src={poster_path} />
    </div>
    <div className="film-description__info-wrapper">
      <div className="film-description__title-wrapper">
        <h2 className="film-description__title">{title}</h2>
        <div className="film-description__rating">{vote_average}</div>
      </div>

      <small className="film-description__tagline">{tagline}</small>

      <div className="film-description__year-wrapper">
        <span className="film-description__year">{release_date.slice(0, 4)}</span>
        <span className="film-description__runtime">{`${runtime} min`}</span>
      </div>

      <p className="film-description__narration">
        {overview}
      </p>
    </div>
  </div>
);

export default FilmDescription;
