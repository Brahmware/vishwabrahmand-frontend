import { Box, Typography, styled, useTheme } from "@mui/material"
import Localization from "./Localization";

const FooterRightWrapper = styled(Box)(({ theme }) => ({
  color: theme.customColors.bhasma,
  backgroundColor: theme.customColors.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.customSpaces.lg, // Adjust the gap as needed
}));

const FooterRight = () => {
  const theme = useTheme();

  const handleCopyToClipboard = () => {
    const textToCopy = 'namaste@vishwabrahmand.com';

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard:', textToCopy);
        // You can also show a success message or perform other actions here
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
        // Handle any errors that occur during clipboard write
      });
  };

  return (
    <FooterRightWrapper >
      <Localization />
      <Typography
        className="cursor-copy"
        fontWeight={theme.customWeight.sectionTitle}
        onClick={handleCopyToClipboard}
      >
        namaste@vishwabrahmand.com
      </Typography>
    </FooterRightWrapper>
  );
}

export default FooterRight;
