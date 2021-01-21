import React from 'react';
import Collapse from 'components/Collapse';
import Navigation from 'components/Navigation';

interface MobileMenuProps {
  open: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open }) => (
  <div className="absolute top-full w-full bg-white shadow-md">
    <Collapse open={open}>
      <Navigation />
    </Collapse>
  </div>
);

export default MobileMenu;
