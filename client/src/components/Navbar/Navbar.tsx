import React from 'react';
import Link from 'next/link';
import { generatePath } from 'helpers/generatePath';
import Container from 'components/Container';
import Navigation from 'components/Navigation';
import MobileMenu from 'components/MobileMenu';
import MobileMenuButton from 'components/MobileMenuButton';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  return (
    <div className="w-full bg-white shadow-md">
      <Container component="header" className="flex items-center relative">
        <Link href={generatePath({ type: 'home' })}>
          <a className="px-4 py-6 md:mr-auto">LOGO</a>
        </Link>
        <div className="md:hidden">
          <MobileMenuButton open={mobileMenuOpen} setOpen={(open) => setMobileMenuOpen(open)} />
        </div>
        <div className="hidden md:flex">
          <Navigation />
        </div>
      </Container>
      <div className="block relative lg:hidden">
        <MobileMenu open={mobileMenuOpen} />
      </div>
    </div>
  );
};

export default Navbar;
