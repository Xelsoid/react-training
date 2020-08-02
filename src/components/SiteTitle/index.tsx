import * as React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

export const SiteTitle = () => (
  <NavLink className="site-title" to="/">
    <strong>netflix</strong>
    roulette
  </NavLink>
);

