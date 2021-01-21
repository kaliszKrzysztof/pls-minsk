import React from 'react';
import { generatePath } from 'helpers/generatePath';
import Container from 'components/Container';
import Link from 'next/link';

const navItems = [
  {
    label: 'Mecze',
    href: generatePath({ type: 'match' }),
  },
  {
    label: 'Tabela',
    href: generatePath({ type: 'table' }),
  },
  {
    label: 'Drużyny',
    href: generatePath({ type: 'team' }),
  },
  {
    label: 'Regulamin',
    href: generatePath({ type: 'regulations' }),
  },
];

const Footer: React.FC = () => (
  <div className="bg-white shadow-md">
    <Container component="footer" className="grid grid-cols-12 gap-4 pt-6 pb-2">
      <div className="col-span-12 md:cols-span-4 text-center">
        <h2 className="text-xl font-medium mb-4">Przydatne linki</h2>
        <ul>
          {navItems.map((navItem) => (
            <li key={navItem.label} className="mb-3">
              <Link href={navItem.href}>
                <a>{navItem.label}</a>
              </Link>
            </li>
          ))}
          <li className="mb-3">
            <a href="http://plsminsk.fora.pl/" target="_blank" rel="noopener noreferrer">
              Forum
            </a>
          </li>
        </ul>
      </div>
      <div className="col-span-12 p-4 text-center">
        <p>Copyright © 2021</p>
      </div>
    </Container>
  </div>
);

export default Footer;
