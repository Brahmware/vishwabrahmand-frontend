import { useEffect, useState } from 'react';
import Section, { SectionTitle } from '../../../components/common/section'
import { KeyDocuments, companyPageData } from '../../../__mocks__/pages/companypage';
import { Box, Skeleton, styled, useTheme } from '@mui/material';
import {useTranslation} from "react-i18next";

const SectionContentWrapper = styled('ul')(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  gap: theme.customSpaces.sm,
  color: theme.customColors.rakthalal,
  textDecoration: "underline",
  fontWeight: theme.customFontWeight.medium,
  marginTop: `calc(${theme.customSpaces.md} * 2) !important`,
}));

const DocumentLink = styled('a')(({ theme }) => ({
  ...theme.textSelectionVarient.varient_rakthalal_on_white,
  color: theme.customColors.rakthalal,
  textTransform: 'none',
}));

const SkeletonWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.customSpaces.sm,
}));

const KeyDocumentsSection = () => {

  const [keyDocumentsData, setKeyDocumentsData] = useState<KeyDocuments>([]);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const {t} = useTranslation();

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
    <Section sx={{ gap: 0 }}>
      <SectionTitle>{t("__ABOUT_PAGE_KEY_DOCUMENTS_TITLE")}</SectionTitle>
      {isLoading ? (
        <SkeletonWrapper>
          {
            Array.from(Array(3).keys()).map((index) => (
              <Skeleton
                key={index}
                variant="text"
                height={theme.customSizes.skeletonTextHeight}
                width={`calc(20% + ${Math.random()} * 20%)`}
              />
            ))
          }
        </SkeletonWrapper>
      ) : (
        <SectionContentWrapper>
          {keyDocumentsData.map((keyDocument, index) => (
            <li key={index}>
              <DocumentLink href={keyDocument.documentURL} target="_blank" rel="noreferrer">
                {keyDocument.documentName}
              </DocumentLink>
            </li>
          ))}
        </SectionContentWrapper>
      )}
    </Section>
  )
}

export default KeyDocumentsSection;