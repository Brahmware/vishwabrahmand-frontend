import {
  Box,
  Typography,
  styled,
  useTheme,
  Snackbar,
  Slide,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import Localization from "./Localization";
import { Mail as EmailIcon } from "@mui/icons-material";
import IconButton from "../../common/buttons/IconButton";

interface FooterRightWrapperProps {
  theme: Theme;
}

const FooterRightWrapper = styled(Box)<FooterRightWrapperProps>(({ theme }) => ({
  color: theme.customColors.bhasma,
  backgroundColor: theme.customColors.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.customSpaces.lg,

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    gap: theme.customSpaces.sm,
  },
}));

const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  '& .MuiSnackbarContent-root': {
    backgroundColor: theme.customColors.rakthalal,
    color: theme.customColors.white,
    minWidth: 'unset',
    minHeight: 'unset',
    width: 'max-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2em',
    fontWeight: theme.customFontWeight.medium,
  }
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  transform: 'translateY(-50%)',
}));

const CustomEmailString = styled(Typography)(({ theme }) => ({
  fontWeight: theme.customWeight.sectionTitle,
  cursor: 'pointer',
}));

const FooterRight = () => {
  const theme = useTheme();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleCopyToClipboard = () => {
    const textToCopy = 'namaste@vishwabrahmand.com';

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard:', textToCopy);
        setIsSnackbarOpen(true); // Show the Snackbar
      })
      .catch((error) => {
        console.error('Error while copying Email to clipboard:', error);
      });
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false); // Hide the Snackbar
  };

  return (
    <FooterRightWrapper theme={theme}>
      <Localization />
      {
        !useMediaQuery(theme.mediaQueries.sm) ? (
          <CustomEmailString
            className="cursor-copy"
            fontWeight={theme.customWeight.sectionTitle}
            onClick={handleCopyToClipboard}
            aria-label="Copy Email to Clipboard"
          >
            namaste@vishwabrahmand.com
          </CustomEmailString>
        ) : (
          <CustomIconButton
            className="cursor-copy"
            onClick={handleCopyToClipboard}
            aria-label="Copy Email to Clipboard"
          >
            <EmailIcon />
          </CustomIconButton>
        )
      }
      <StyledSnackbar
        open={isSnackbarOpen}
        autoHideDuration={theme.timing.long}
        onClose={handleCloseSnackbar}
        TransitionComponent={Slide}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        message="Email copied to Clipboard"
      />
    </FooterRightWrapper>
  );
}

export default FooterRight;
