import { Box, Typography, styled } from "@mui/material";

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.customSizes.sectionTitle,
  fontWeight: theme.customFontWeight.medium,
  color: theme.customColors.slogan,

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.customSizes.sectionTitleMobile,
  },
}));

const Section = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.customSpaces.md,
  width: '100%',
}));

export default Section;
