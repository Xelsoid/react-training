import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const TextInput = ({
  type, placeholder, defaultValue, onChangeCallback,
}) => (
  <input
    className="text-input"
    type={type}
    placeholder={placeholder}
    onChange={onChangeCallback}
    value={defaultValue}
  />
);


TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
};

export default TextInput;
