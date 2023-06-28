import { Typography, TypographyProps, styled } from "@mui/material";

interface DocumentTitleProps extends TypographyProps {
  component?: React.ElementType;
  fontSize?: string;
  fontWeight?: number;
};

const DocumentTitle = styled(Typography)<DocumentTitleProps>(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: theme.customFontWeight.semiBold,
}));

export default DocumentTitle;