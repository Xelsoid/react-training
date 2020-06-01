import React from 'react';

import './index.scss';
import GalleryCard from "@components/GalleryCard";

const FilmsGallery = ({ films: {data} }) => (
  <div className="film-gallery">
    {data.map(film => (
      <div key={film.id} className="film-gallery--column">
        <GalleryCard film={film} />
      </div>
    ))}
  </div>
);

export default FilmsGallery;
