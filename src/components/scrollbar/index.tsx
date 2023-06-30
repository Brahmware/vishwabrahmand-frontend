import { useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { useLocation } from 'react-router-dom';

interface ScrollBarWrapperProps extends React.ComponentProps<typeof Scrollbars> {
  children: React.ReactNode;
}

const ScrollBarWrapper: React.FC<ScrollBarWrapperProps> = ({ children, ...scrollbarProps }) => {
  const theme = useTheme();
  const [height, setHeight] = useState(window.innerHeight);
  const location = useLocation();
  const scrollbarRef = useRef<Scrollbars>(null);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScrollToTop = () => {
      if (scrollbarRef.current) {
        scrollbarRef.current.scrollToTop();
      }
    };

    handleScrollToTop();
  }, [location.pathname]);

  if (theme.breakpoints.md > window.innerWidth) return <>{children}</>;

  return (
    <Scrollbars
      id="scrollbar-component"
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      style={{ height }}
      thumbMinSize={80}
      renderTrackVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: 'transparent',
            right: 0,
            bottom: 0,
            top: 0,
            width: '0.5em',
            opacity: 0.9,
            zIndex: 999,
          }}
        />
      )}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: theme.customColors.rakthalal,
            borderRadius: 0,
            width: '0.5em',
            opacity: 1,
          }}
        />
      )}
      ref={scrollbarRef}
      {...scrollbarProps}
    >
      {children}
    </Scrollbars>
  );
};

export default ScrollBarWrapper;
