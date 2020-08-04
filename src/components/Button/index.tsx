import * as React from 'react';
import './index.scss';
import { ButtonInt } from '../../interface';

export const Button = ({
  type, additionalClassName, onClickCallback, name,
}: ButtonInt) => (
  <button
    type={type}
    className={`btn ${additionalClassName}`}
    onClick={onClickCallback}
  >
    {name}
  </button>
);
