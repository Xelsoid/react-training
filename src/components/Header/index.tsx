import * as React from 'react';
import './index.scss';

interface HeaderProps {
    headerChildren: any;
    upperChild?: React.ReactNode;
    middleChild?: React.ReactNode;
}

export const Header = ({ headerChildren: { upperChild, middleChild } }: HeaderProps) => (
  <div className="header-wrapper">
    <header className="header">
      <div className="header__logo-wrapper">
        {upperChild}
      </div>
      {middleChild}
    </header>
  </div>
);
