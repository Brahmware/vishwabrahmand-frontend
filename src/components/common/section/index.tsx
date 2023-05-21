import { Box, Typography, styled } from "@mui/material";

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.customSizes.sectionTitle,
  fontWeight: theme.customFontWeight.medium,
  color: theme.customColors.slogan
}));

const Section = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.customSpaces.md,
  width: '100%',
}));

export default Section;
