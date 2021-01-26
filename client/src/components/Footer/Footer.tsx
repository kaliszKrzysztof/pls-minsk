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
      <div className="col-span-12 md:col-span-4 text-center">
        <img src="/logo.png" alt="PLS Mińsk Maz" width="240" className="mx-auto mb-4 md:mb-0 md:mt-2" />
      </div>
      <div className="col-span-12 md:col-span-4 text-center">
        <h2 className="text-xl font-medium mb-4">Przydatne linki</h2>
        <ul data-testid="links">
          {navItems.map((navItem) => (
            <li data-testid="footer-link" key={navItem.label} className="mb-3">
              <Link href={navItem.href}>
                <a>{navItem.label}</a>
              </Link>
            </li>
          ))}
          <li data-testid="footer-link" className="mb-3">
            <a href="http://plsminsk.fora.pl/" target="_blank" rel="noopener noreferrer">
              Forum
            </a>
          </li>
        </ul>
      </div>
      <div className="col-span-12 p-4 text-center">
        <p data-testid="copyright">Copyright © {new Date().getFullYear()}</p>
      </div>
    </Container>
  </div>
);

export default Footer;
