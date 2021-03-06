import React from 'react';
import GalleryCard from '@components/GalleryCard';
import PropTypes from 'prop-types';
import './index.scss';

const FilmsGallery = ({ films }) => (

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

FilmsGallery.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsGallery;
