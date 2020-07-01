import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const OptionChooser = ({ optionsConfig, defaultValue, onChangeCallback }) => (
  <div className="option-chooser-wrapper">
    {optionsConfig.map((option) => (
      <React.Fragment key={option.value}>
        <input
          className="option-chooser__option"
          type="radio"
          id={option.value}
          name={option.name}
          value={option.value}
          checked={defaultValue === option.value}
          onChange={onChangeCallback}
        />
        <label
          className="option-chooser__label"
          htmlFor={option.value}
        >
          {option.radioBtnName}
        </label>
      </React.Fragment>
    ))}
  </div>
);

OptionChooser.propTypes = {
  optionsConfig: PropTypes.array.isRequired,
  defaultValue: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
};

export default OptionChooser;
