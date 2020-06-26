import React from 'react';
import Header from '@components/Header';
import Main from '@components/Main';
import Footer from '@components/Footer';
import Logo from '@components/Logo';
import FilmDescription from '@components/FilmDescription';
import SearchIcon from '@components/SearchIcon';

const headerChildren = {
  upperChild:
  <>
    <Logo />
    <SearchIcon />
  </>,
  middleChild: <FilmDescription />,
};

const FilmPage = () => (
  <>
    <Header
      headerChildren={headerChildren}
    />
    <Main />
    <Footer />
  </>
);

export default FilmPage;
