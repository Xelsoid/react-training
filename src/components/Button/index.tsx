import * as React from 'react';
import './index.scss';

interface ButtonProps {
    type: "button" | "submit" | "reset";
    additionalClassName: string;
    onClickCallback: (e: React.MouseEvent) => void;
    name: string;
}

export const Button = ({
  type, additionalClassName, onClickCallback, name,
}: ButtonProps) => (
  <button
    type={type}
    className={`btn ${additionalClassName}`}
    onClick={onClickCallback}
  >
    {name}
  </button>
);
