import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Header = ({ headerChildren: { upperChild, middleChild } }) => (
  <div className="header-wrapper">
    <header className="header">
      <div className="header__logo-wrapper">
        {upperChild}
      </div>
      {middleChild}
    </header>
  </div>
);

Header.propTypes = {
  headerChildren: PropTypes.shape(
    {
      upperChild: PropTypes.node,
      middleChild: PropTypes.node,
    },
  ),
};

Header.defaultProps = {
  headerChildren: {},
};

export default Header;
