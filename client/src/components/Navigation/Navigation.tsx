import React from 'react';
import Link from 'next/link';
import { FaTable, FaUsers, FaVolleyballBall, FaComments } from 'react-icons/fa';
import { generatePath } from 'helpers/generatePath';

const navItems = [
  {
    label: 'Mecze',
    href: generatePath({ type: 'match' }),
    icon: FaVolleyballBall,
  },
  {
    label: 'Tabela',
    href: generatePath({ type: 'table' }),
    icon: FaTable,
  },
  {
    label: 'Drużyny',
    href: generatePath({ type: 'team' }),
    icon: FaUsers,
  },
];

const Navigation: React.FC = () => (
  <>
    {navItems.map((navItem) => (
      <Link key={navItem.label} href={navItem.href}>
        <a className="text-lg px-4 py-6 border-t md:border-t-0 flex items-center relative transition-colors hover:bg-gray-100 focus:bg-gray-100">
          <span className="absolute left-0 h-1/2 w-px bg-gray-200" />
          <navItem.icon size={24} className="mr-4" />
          {navItem.label}
        </a>
      </Link>
    ))}
    <a
      href="http://plsminsk.fora.pl/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg px-4 py-6 border-t md:border-t-0 flex items-center relative transition-colors hover:bg-gray-100 focus:bg-gray-100"
    >
      <span className="absolute left-0 h-1/2 w-px bg-gray-200" />
      <FaComments size={24} className="mr-4" />
      Forum
    </a>
  </>
);

export default Navigation;
