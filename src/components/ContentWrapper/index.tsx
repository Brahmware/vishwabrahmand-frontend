import React from 'react';
import { styled } from '@mui/material';

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
    <ContentPositioning id="content-wrapper">
      {children}
    </ContentPositioning>
  )
}

export default ContentWrapper