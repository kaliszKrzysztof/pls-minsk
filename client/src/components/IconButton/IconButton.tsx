import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'white' | 'default';
  className?: string;
  onClick?: () => Promise<void> | void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  disabled,
  className,
  children,
  variant = 'default',
  onClick,
  ...rest
}) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    disabled={disabled}
    onClick={onClick}
    className={clsx('p-2 rounded-full transition-colors outline-none', className, {
      'focus:bg-gray-200 hover:bg-gray-200': variant === 'default',
      'text-common-white': variant === 'white',
    })}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
