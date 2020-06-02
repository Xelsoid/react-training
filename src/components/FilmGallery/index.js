import React from 'react';
import './index.scss';
import GalleryCard from '@components/GalleryCard';
import PropTypes from 'prop-types';

const FilmsGallery = ({ films: { data } }) => (
  <div className="film-gallery">
    {data.map((film) => (
      <div key={film.id} className="film-gallery--column">
        <GalleryCard
          title={film.title}
          posterPath={film.poster_path}
          releaseDate={film.release_date}
          genres={film.genres}
        />
      </div>
    ))}
  </div>
);

FilmsGallery.propTypes = {
  films: PropTypes.shape({
    data: PropTypes.array,
  }).isRequired,
};

export default FilmsGallery;
