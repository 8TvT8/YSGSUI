import React from 'react';
import './index.less';

export interface ButtonProps {
  type?: 'primary' | 'default' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'medium',
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={`ysgs-button ysgs-button-${type} ysgs-button-${size} ${
        disabled ? 'ysgs-button-disabled' : ''
      }`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
