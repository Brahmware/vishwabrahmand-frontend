import React, { useEffect } from 'react';
import { styled } from '@mui/material';

const ContentPositioning = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  width: '100%',
  overflow: 'hidden',
  overflowX: 'hidden',

  [theme.breakpoints.down('lg')]: {
    padding: `0 ${theme.customPadding.md}`,
    margin: 0,
  },
}));

const ContentWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const contentWrapper = document.body;
      const distanceToRightEdge = window.innerWidth - e.pageX;

      if (contentWrapper && distanceToRightEdge < 15) {
        contentWrapper.classList.add('more-width');
      } else if (contentWrapper) {
        contentWrapper.classList.remove('more-width');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ContentPositioning>
      {children}
    </ContentPositioning>
  );
};

export default ContentWrapper;
