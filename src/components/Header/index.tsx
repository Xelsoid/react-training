import * as React from 'react';
import './index.scss';
import { HeaderInt } from '../../interface';

export const Header = ({ headerChildren: { upperChild, middleChild } }: HeaderInt) => (
  <div className="header-wrapper">
    <header className="header">
      <div className="header__logo-wrapper">
        {upperChild}
      </div>
      {middleChild}
    </header>
  </div>
);
