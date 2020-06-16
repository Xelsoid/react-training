import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

const SiteTitle = () => (
  <NavLink className="site-title" to="/">
    <strong>netflix</strong>
    roulette
  </NavLink>
);

export default SiteTitle;
