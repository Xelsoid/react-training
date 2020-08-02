import * as React from 'react';
import './index.scss';

interface TextInputProps {
    type: string;
    defaultValue: string;
    placeholder: string;
    onChangeCallback: (e: React.ChangeEvent) => void;
}

export const TextInput = ({
  type, placeholder, defaultValue, onChangeCallback,
}: TextInputProps) => (
  <input
    className="text-input"
    type={type}
    placeholder={placeholder}
    onChange={onChangeCallback}
    value={defaultValue}
  />
);
