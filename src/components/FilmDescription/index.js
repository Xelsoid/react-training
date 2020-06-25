import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './index.scss';
import { addImageFallback } from '@utils/index';

const FilmDescription = ({ match }) => {
  const moviesData = useSelector((state) => state.moviesData);
  const { id } = match.params;
  const film = moviesData.data.filter((elem) => elem.id.toString() === id.toString());
  const {
    poster_path, title, tagline, vote_average, release_date, runtime, overview,
  } = film[0];

  return (
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
};

FilmDescription.propTypes = {
  match: PropTypes.object.isRequired,
};

export default FilmDescription;
