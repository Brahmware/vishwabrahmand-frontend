import { useEffect, useState } from 'react';
import Section, { SectionTitle } from '../../../components/common/section'
import { KeyDocuments, companyPageData } from '../../../__mocks__/pages/companypage';
import { Box, styled, useTheme } from '@mui/material';
import LoadingComponent from '../../../components/common/loading';

const SectionContentWrapper = styled('ul')(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  gap: theme.customSpaces.sm,
  color: theme.customColors.rakthalal,
  textDecoration: "underline",
  fontWeight: theme.customFontWeight.medium,
}));

const DocumentLink = styled('a')(({ theme }) => ({
  color: theme.customColors.rakthalal,
}));

const KeyDocumentsSection = () => {

  const [keyDocumentsData, setKeyDocumentsData] = useState<KeyDocuments>([]);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { keyDocumentsData }: { keyDocumentsData: KeyDocuments } = await companyPageData.getAboutData();
        setKeyDocumentsData(keyDocumentsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching keyDocuments data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Section sx={{gap: theme.customSpaces.lg}}>
      <SectionTitle>Key Documents</SectionTitle>
      {isLoading ? (
        <Box display="flex" justifyContent="center">
          <LoadingComponent loaderType="box" />
        </Box>
      ) : (
        <SectionContentWrapper>
          {keyDocumentsData.map((keyDocument, index) => (
            <li key={index}><DocumentLink href={keyDocument.documentURL} target="_blank" rel="noreferrer"> {keyDocument.documentName} </DocumentLink></li>
          ))}
        </SectionContentWrapper>
      )}
    </Section>
  )
}

export default KeyDocumentsSection;