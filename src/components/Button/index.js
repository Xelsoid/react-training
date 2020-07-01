import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

/* eslint-disable react/button-has-type */
const Button = ({
  type, additionalClassName, onClickCallback, name,
}) => (
  <button
    type={type}
    className={`btn ${additionalClassName}`}
    onClick={onClickCallback}
  >
    {name}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  additionalClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'button',
  additionalClassName: '',
};

export default Button;
