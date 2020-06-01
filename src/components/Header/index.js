import React from 'react';
import FilmSearchComponent from "@components/FilmSearchComponent";
import Logo from "@components/Logo";
import './index.scss';

const Header = () => (
    <div className='header-wrapper'>
      <header className='header'>
        <Logo/>
        <FilmSearchComponent/>
      </header>
    </div>
);

export default Header;
