import React from 'react';
import FilmSearchComponent from "@components/FilmSearchComponent";
import Logo from "@components/Logo";
import './index.scss';

const Header = () => (
  <header className='header-wrapper'>
    <Logo/>
    <FilmSearchComponent/>
  </header>
);

export default Header;
