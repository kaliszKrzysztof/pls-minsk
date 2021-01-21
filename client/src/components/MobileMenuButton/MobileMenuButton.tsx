import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import clsx from 'clsx';
import IconButton from 'components/IconButton';

interface MobileMenuButtonProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ open, setOpen }) => (
  <div className="relative">
    <IconButton type="button" aria-label="Menu" className="relative" onClick={() => setOpen(!open)}>
      <FaCaretDown
        size={26}
        className={clsx('text-navigation-light dark:text-navigation-dark transition-transform', {
          'transform rotate-180': open,
        })}
      />
    </IconButton>
  </div>
);

export default MobileMenuButton;
