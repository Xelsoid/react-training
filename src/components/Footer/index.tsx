import * as React from 'react';
import './index.scss';
import { SiteTitle } from '@components/SiteTitle/index';

export const Footer = () => (
  <div className="footer-wrapper">
    <footer className="footer">
      <SiteTitle />
    </footer>
  </div>
);
