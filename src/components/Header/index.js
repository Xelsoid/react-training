import React from 'react';
import Logo from '@components/Logo';
import './index.scss';
import FilmDescription from '@components/FilmDescription';
import FilmSearchComponent from '@components/FilmSearchComponent';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import SearchIcon from '@components/SearchIcon';

const Header = () => {
  const film = MOCKED_DATA.data[1];
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header__logo-wrapper">
          <Logo />
          {/* <SearchIcon/> */}
        </div>

        <FilmSearchComponent />
        <FilmDescription
          posterPath={film.poster_path}
          title={film.title}
          tagline={film.tagline}
          voteAverage={film.vote_average}
          releaseDate={film.release_date}
          runtime={film.runtime}
          overview={film.overview}
        />
      </header>
    </div>
  );
};

export default Header;
