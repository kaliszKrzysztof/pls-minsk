import React from 'react';

interface CollapseProps {
  open: boolean;
}

const Collapse: React.FC<CollapseProps> = ({ open, children }) => {
  const collapseRef = React.useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = React.useState(0);
  React.useEffect(() => {
    if (open) {
      const sh = collapseRef.current ? collapseRef.current.scrollHeight : 0;
      setScrollHeight(sh);
    } else {
      setScrollHeight(0);
    }
  }, [open]);

  return (
    <div
      className="overflow-hidden h-0 transition-all"
      style={{
        height: open ? `${scrollHeight}px` : '0px',
      }}
      ref={collapseRef}
    >
      {children}
    </div>
  );
};

export default Collapse;
