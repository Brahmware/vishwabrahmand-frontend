import { styled } from '@mui/material';
import React from 'react';

const ContentPositioning = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  width: '100%',
  height: `calc(100vh - ${theme.customHeights.navBarHeight})`,
  overflow: 'auto',
}));

const ContentWrapper = (
  {
    children
  }: {
    children: React.ReactNode
  }
) => {
  return (
    <ContentPositioning>
      {children}
    </ContentPositioning>
  )
}

export default ContentWrapper