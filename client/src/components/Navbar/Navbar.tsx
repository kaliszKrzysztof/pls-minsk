import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Tippy from '@tippyjs/react';
import { generatePath } from 'helpers/generatePath';
import Container from 'components/Container';
import Navigation from 'components/Navigation';
import MobileMenu from 'components/MobileMenu';
import MobileMenuButton from 'components/MobileMenuButton';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleRouteChange = (): void => {
    setMobileMenuOpen(false);
  };

  React.useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <div className="w-full bg-white shadow-md">
      <Container component="header" className="flex items-center relative">
        <Link href={generatePath({ type: 'home' })}>
          <a className="py-2 pr-4 md:pr-0 md-py-0 md:mr-auto">
            <Tippy content="Powiatowa Liga Siatkówki w Mińsku Mazowieckim">
              <img src="/logo_small.gif" alt="PLS Mińsk Maz" width="80" />
            </Tippy>
          </a>
        </Link>
        <div className="relative md:hidden ml-2">
          <span className="absolute -left-3 h-full w-px bg-gray-200" />
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
