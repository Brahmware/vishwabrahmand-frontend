import { Box, Typography, styled, useTheme } from "@mui/material";
import { ReactNode } from "react";

export const ParagraphTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.customSizes.paragraphTitle,
  fontWeight: theme.customFontWeight.semiBold,
  color: theme.customColors.bhasma
}));

export const ParagraphBody = styled(Typography)(({ theme }) => ({
  fontSize: theme.customSizes.paragraphBody,
  fontWeight: theme.customFontWeight.regular,
  color: theme.customColors.bhasma
}));

const Paragraph = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.customSpaces.sm,
  padding: 0
}));

export const BlockedParagraph = ({ children }: { children: ReactNode }) => {
  return (
    <Paragraph>
      <ParagraphBody>{children}</ParagraphBody>
    </Paragraph>
  )
};

export const ListItemParagraph = styled('li')(({ theme }) => ({
  width: '100%',
  fontSize: theme.customSizes.paragraphBody,
  listStyleType: 'none',
  position: 'relative',
  paddingLeft: '1em',
  display: 'flex', // Add display flex to align items
  alignItems: 'center', // Align items to center vertically
  "&::before": {
    content: "''",
    position: 'absolute',
    top: '0.525em',
    left: 0,
    transform: 'translateY(-50%)',
    backgroundColor: theme.customColors.rakthalal,
    borderRadius: '50%',
    height: '0.5em',
    width: '0.5em',
    justifySelf: 'start'
  },
}));


export const ListParagraph = (
  {
    children
  }: {
    children: ReactNode
  }
) => {
  const theme = useTheme();
  return (
    <Paragraph component='ul' sx={{ gap: '0.05em' }}>
      {children}
    </Paragraph>
  )
};

export const NoDataParagraph = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: `${theme.customSpaces.sm} 0`,
}));

export default Paragraph;
