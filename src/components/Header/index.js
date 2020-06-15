import React from 'react';
import Logo from '@components/Logo';
import FilmDescription from '@components/FilmDescription';
import FilmSearchComponent from '@components/FilmSearchComponent';
import SearchIcon from '@components/SearchIcon';

import './index.scss';

const Header = () => (
  <div className="header-wrapper">
    <header className="header">
      <div className="header__logo-wrapper">
        <Logo />
        {/* <SearchIcon/> */}
      </div>

      <FilmSearchComponent />
      {/* <FilmDescription */}
      {/* posterPath={film.poster_path} */}
      {/* title={film.title} */}
      {/* tagline={film.tagline} */}
      {/* voteAverage={film.vote_average} */}
      {/* releaseDate={film.release_date} */}
      {/* runtime={film.runtime} */}
      {/* overview={film.overview} */}
      {/* /> */}
    </header>
  </div>
);

export default Header;
