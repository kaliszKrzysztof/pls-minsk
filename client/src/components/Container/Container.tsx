import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  component?: 'div' | 'main' | 'header' | 'footer';
}

const Container: React.FC<ContainerProps> = ({ component: Component = 'div', children, className }) => (
  <Component className={`mx-auto max-w-screen-xl px-2 md:px-4 overflow-hidden ${className}`}>{children}</Component>
);

export default Container;
