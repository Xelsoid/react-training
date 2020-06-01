import React from 'react';
import Logo from '@components/Logo';
import './index.scss';
import FilmDescription from '@components/FilmDescription';
import FilmSearchComponent from '@components/FilmSearchComponent';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import SearchIcon from '@components/SearchIcon';

const Header = () => (
  <div className="header-wrapper">
    <header className="header">
      <div className="header__logo-wrapper">
        <Logo />
        {/* <SearchIcon/> */}
      </div>

      <FilmSearchComponent />
      {/* <FilmDescription film={MOCKED_DATA.data[1]}/> */}
    </header>
  </div>
);

export default Header;
