import * as React from 'react';
import './index.scss';

interface OptionChooserProps {
    optionsConfig: Array<any>;
    defaultValue: string;
    onChangeCallback: (e: React.ChangeEvent) => void;
}

export const OptionChooser = ({ optionsConfig, defaultValue, onChangeCallback }: OptionChooserProps) => (
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
