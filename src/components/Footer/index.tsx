import { Box, Theme, styled } from "@mui/material";
import FooterRight from "./FooterRight";
import Copyright from "./Copyright";
import { MUIStyledCommonProps } from "@mui/system";

interface FooterWrapperProps extends MUIStyledCommonProps<Theme> { }

const FooterWrapper = styled((props: FooterWrapperProps & React.HTMLAttributes<HTMLDivElement>) => (
  <Box component="footer" {...props} />
))(({ theme }) => ({
  ...theme.bodyProps,
  position: 'relative',
  width: '100%',
  padding: `0 ${theme.customPadding.xs}`,
  borderTop: `1px solid ${theme.customColors.border}`,
  zIndex: 3,
  backgroundColor: theme.customColors.white,

  [theme.breakpoints.down('md')]: {
    padding: `
      ${theme.customPadding.xl} 0
      ${theme.customPadding.xl} ${theme.customPadding.xs}
    `,
  },

  [theme.breakpoints.down('sm')]: {
    padding: `
      ${theme.customPadding.lg} 0
      ${theme.customPadding.lg} ${theme.customPadding.xs}
    `,
  },
  
}));

const StyledBox = styled(Box)(({ theme }) => ({
  height: theme.customHeights.footerHeight,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.customSpaces.lg,

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    gap: theme.customSpaces.sm,
    height: 'auto',
  },
}));

const Footer = () => {
  return (
    <FooterWrapper>
      <StyledBox>
        <Copyright />
        <FooterRight />
      </StyledBox>
    </FooterWrapper>
  );
};

export default Footer;
