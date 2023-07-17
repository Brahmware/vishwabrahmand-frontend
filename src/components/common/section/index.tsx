import { Box, BoxProps, Typography, styled } from "@mui/material";

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.customSizes.sectionTitle,
  fontWeight: theme.customFontWeight.medium,
  color: theme.customColors.slogan,
  paddingBottom: theme.customSpaces.sm,

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.customSizes.sectionTitleMobile,
  },
}));

const Section = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

export default Section;

export interface SectionProps extends BoxProps {};
