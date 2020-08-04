import * as React from 'react';
import './index.scss';

export const Main: React.FC = ({ children }) => (
  <div className="main-wrapper">
    <main>
      {children}
    </main>
  </div>
);
