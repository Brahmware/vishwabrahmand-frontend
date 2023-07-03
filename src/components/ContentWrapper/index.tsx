import React, { useEffect } from 'react';
import { styled } from '@mui/material';
import { useScrollToTop } from '../../utils/useScrollToTop';
import { useSetLanguageToHtml } from '../../utils/useSetLanguageToHtml';
import useAddMoreWidthToScrollbar from '../../utils/useAddMoreWidthToScrollbar';

const ContentPositioning = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  width: '100%',

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
  
  useAddMoreWidthToScrollbar();
  useScrollToTop();
  useSetLanguageToHtml();

  return (
    <ContentPositioning>
      {children}
    </ContentPositioning>
  );
};

export default ContentWrapper;
