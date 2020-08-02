import * as React from 'react';
import './index.scss';

interface MainProps {
    children: React.ReactNode;
};

export const Main = ({ children }: MainProps) => (
  <div className="main-wrapper">
    <main>
      {children}
    </main>
  </div>
);
