import React from 'react';
import { Route, Switch } from 'react-router';
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
        <Route path="/film" component={SearchIcon} />
      </div>
      <Switch>
        <Route path="/" exact component={FilmSearchComponent} />
        <Route path="/film/:id" component={FilmDescription} />
      </Switch>
    </header>
  </div>
);

export default Header;
