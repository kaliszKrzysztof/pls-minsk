import React from 'react';

interface PageHeaderProps {
  component?: 'h1' | 'h2' | 'h3';
  text: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ component: Component = 'h1', text }) => (
  <div className="bg-white p-3 mb-4 shadow-md">
    <Component data-testid="page-header" className="text-3xl font-medium text-center">
      {text}
    </Component>
  </div>
);

export default PageHeader;
