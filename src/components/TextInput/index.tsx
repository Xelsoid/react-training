import * as React from 'react';
import './index.scss';
import { TextInputPropsInt } from '../../interface';

export const TextInput = ({
  type, placeholder, defaultValue, onChangeCallback,
}: TextInputPropsInt) => (
  <input
    className="text-input"
    type={type}
    placeholder={placeholder}
    onChange={onChangeCallback}
    value={defaultValue}
  />
);
