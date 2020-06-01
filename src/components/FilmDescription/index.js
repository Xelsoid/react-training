import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const FilmDescription = ({
  posterPath, title, tagline, voteAverage, releaseDate, runtime, overview,
}) => (
  <div className="film-description">
    <div className="film-description__image-wrapper">
      <img alt={title} className="film-description__image" src={posterPath} />
    </div>
    <div className="film-description__info-wrapper">
      <div className="film-description__title-wrapper">
        <h2 className="film-description__title">{title}</h2>
        <div className="film-description__rating">{voteAverage}</div>
      </div>

      <small className="film-description__tagline">{tagline}</small>

      <div className="film-description__year-wrapper">
        <span className="film-description__year">{releaseDate.slice(0, 4)}</span>
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
  posterPath: PropTypes.string,
  releaseDate: PropTypes.string,
  tagline: PropTypes.string,
  voteAverage: PropTypes.number,
  runtime: PropTypes.number,
  overview: PropTypes.string,
};

FilmDescription.defaultProps = {
  title: '',
  posterPath: '',
  releaseDate: '',
  tagline: '',
  voteAverage: '',
  runtime: '',
  overview: '',
};

export default FilmDescription;
