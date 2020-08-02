import * as React from 'react';
import './index.scss';
import { addImageFallback } from '../../utils/index';

interface FilmDescriptionProps {
    title: string;
    poster_path: string;
    vote_average: number;
    tagline: string;
    release_date: string;
    runtime: number;
    overview: string;
}

export const FilmDescription = ({
  title, poster_path, vote_average, tagline, release_date, runtime, overview,
}: FilmDescriptionProps) => (
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
        <span className="film-description__year">{release_date ? release_date.slice(0, 4) : ''}</span>
        <span className="film-description__runtime">{`${runtime} min`}</span>
      </div>

      <p className="film-description__narration">
        {overview}
      </p>
    </div>
  </div>
);
