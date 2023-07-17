import { Box, styled } from '@mui/material';
import AboutSection from './About';
import LeadershipSection from './Leadership';
import AlliesSection from './Allies';
import KeyDocumentsSection from './KeyDocuments';
import { useContainerMinHeight } from '../../utils/useContainerMinHeight';
import { useAddRootClass } from '../../utils/useAddRootClass';
import { Fragment } from 'react';
import Head from './Head';

interface CompanyPageWrapperProps {
  containerminheight?: number;
};

const CompanyPageWrapper = styled(Box)<CompanyPageWrapperProps>(({ theme, containerminheight }) => ({
  ...theme.bodyProps,
  minHeight: `${containerminheight}px`,
  width: '100%',
  padding: theme.itemBodyProps.padding,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
}));

const CompanyPage = () => {

  useAddRootClass('company-page');
  return (
    <Fragment>
      <Head />
      <CompanyPageWrapper containerminheight={useContainerMinHeight()}>
        <AboutSection />
        <LeadershipSection />
        <AlliesSection />
        <KeyDocumentsSection />
      </CompanyPageWrapper>
    </Fragment>
  )
};

export default CompanyPage