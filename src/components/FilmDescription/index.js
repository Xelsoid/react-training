import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { addImageFallback } from '@utils/index';

const FilmDescription = ({
  title, poster_path, vote_average, tagline, release_date, runtime, overview,
}) => (
  <div className="film-description">
    <div className="film-description__image-wrapper">
      <img
        alt={title}
        className="film-description__image"
        src={poster_path}
        onError={addImageFallback}
      />
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

FilmDescription.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  tagline: PropTypes.string,
  release_date: PropTypes.string,
  runtime: PropTypes.number,
  overview: PropTypes.string,
};

FilmDescription.defaultProps = {
  title: 'title',
  poster_path: 'title',
  vote_average: 0,
  tagline: 'title',
  release_date: 'title',
  runtime: 0,
  overview: 'title',
};

export default FilmDescription;
