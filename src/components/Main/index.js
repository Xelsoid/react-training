import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Main = ({ children }) => (
  <div className="main-wrapper">
    <main>
      {children}
    </main>
  </div>
);

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: null,
};

export default Main;
