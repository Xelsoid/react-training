import React from 'react';
import Header from '@components/Header';
import Main from '@components/Main';
import Footer from '@components/Footer';
import Logo from '@components/Logo';
import FilmSearchComponent from '@components/FilmSearchComponent';

const headerChildren = {
  upperChild: <Logo />,
  middleChild: <FilmSearchComponent />,
};

const RootPage = () => (
  <>
    <Header
      headerChildren={headerChildren}
    />
    <Main />
    <Footer />
  </>
);

export default RootPage;
