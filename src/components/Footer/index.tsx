import { Box, styled, useTheme } from "@mui/material";
import Brand from "./Brand";
import FooterRight from "./FooterRight";

const StyledBox = styled(Box)(({ theme }) => ({
  height: theme.customHeights.footerHeight,
  width: '100%',
  borderTop: `1px solid ${theme.customColors.border}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...theme.bodyProps,
        width: '100%',
        padding: 0,
        px: theme.customPadding.xs,
      }}
      component='footer'
    >
      <StyledBox>
        <Brand />
        <FooterRight />
      </StyledBox>
    </Box>
  )
}

export default Footer