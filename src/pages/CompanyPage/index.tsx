import { Box, styled } from '@mui/material';
import AboutSection from './About';
import LeadershipSection from './Leadership';
import AlliesSection from './Allies';
import KeyDocumentsSection from './KeyDocuments';
import { useContainerMinHeight } from '../../utils/useContainerMinHeight';

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
  gap: theme.customSpaces.xl
}));

const CompanyPage = () => {

  const containerMinHeight = useContainerMinHeight();

  return (
    <CompanyPageWrapper containerminheight={containerMinHeight}>
      <AboutSection />
      <LeadershipSection />
      <AlliesSection />
      <KeyDocumentsSection />
    </CompanyPageWrapper>
  )
};

export default CompanyPage