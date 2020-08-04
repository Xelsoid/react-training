import * as React from 'react';
import { GalleryCard } from '@components/GalleryCard/index';
import './index.scss';
import { FilmsGalleryInt } from '../../interface';

export const FilmsGallery = ({ films }: FilmsGalleryInt) => (
  <div className="film-gallery">
    {films.map((film) => (
      <div key={film.id} className="film-gallery--column">
        <GalleryCard
          title={film.title}
          poster_path={film.poster_path}
          release_date={film.release_date}
          genres={film.genres}
          id={film.id}
        />
      </div>
    ))}
  </div>
);
