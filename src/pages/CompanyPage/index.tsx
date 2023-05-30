import { Box, styled } from '@mui/material';
import AboutSection from './About';
import LeadershipSection from './Leadership';
import AlliesSection from './Allies';
import KeyDocumentsSection from './KeyDocuments';

const CompanyPageWrapper = styled(Box)(({ theme }) => ({
    ...theme.bodyProps,
    width: '100%',
    padding: `${theme.customPadding.xl} ${theme.customPadding.sm}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    gap: theme.customSpaces.xl
}));

const CompanyPage = () => {
    return (
        <CompanyPageWrapper>
            <AboutSection />
            <LeadershipSection />
            <AlliesSection />
            <KeyDocumentsSection />
        </CompanyPageWrapper>
    )
};

export default CompanyPage