import React from 'react';
import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('copyright section have correct text', () => {
    const { getByTestId } = render(<Footer />);
    const copyright = getByTestId('copyright');
    expect(copyright).toBeInTheDocument();
    expect(copyright).toHaveTextContent(`Copyright © ${new Date().getFullYear()}`);
  });

  it('renders links', () => {
    const { getAllByTestId } = render(<Footer />);
    const links = getAllByTestId('footer-link').map((link) => link.textContent);
    expect(links).toMatchInlineSnapshot(`
      Array [
        "Mecze",
        "Tabela",
        "Drużyny",
        "Regulamin",
        "Forum",
      ]
    `);
  });
});
