import {
  Box,
  Typography,
  styled,
  useTheme,
  Snackbar,
  Slide,
  Theme,
} from "@mui/material";
import { useState } from "react";
import Localization from "./Localization";
import IconButton from "../../common/buttons/IconButton";
import { EmailIcon } from "../../../Assets/Logo/Icons";
import { useTranslation } from "react-i18next";

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


const CustomEmailString = styled(Typography)(({ theme }) => ({
  fontWeight: theme.customWeight.sectionTitle,
  cursor: 'pointer',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  transform: 'translateY(-50%)',
  fontSize: '1.125rem',
  gap: theme.customSpaces.xs,
  borderRadius: '2em',
  padding: `0.35rem ${theme.customSpaces.xs}`,
  fontWeight: theme.customFontWeight.regular,
  display: 'none',

  '& svg path': {
    transition: 'fill 0.3s ease-in-out',
    fill: theme.customColors.bhasma,
  },

  '&:hover': {
    '& svg path': {
      fill: theme.customColors.rakthalal,
    }
  },

  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));

const FooterRight = () => {
  const theme = useTheme();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const { t } = useTranslation();

  const handleCopyToClipboard = () => {
    const textToCopy = 'namaste@vishwabrahmand.com';

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard:', textToCopy);
        setIsSnackbarOpen(true);
      })
      .catch((error) => {
        console.error('Error while copying Email to clipboard:', error);
      });
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <FooterRightWrapper theme={theme}>
      <Localization />
      <CustomEmailString
        className="cursor-copy"
        fontWeight={theme.customWeight.sectionTitle}
        onClick={handleCopyToClipboard}
        aria-label={t("__FOOTER_CONTACT_COPY_BUTTON")}
      >
        namaste@vishwabrahmand.com
      </CustomEmailString>
      <CustomIconButton
        className="cursor-copy"
        onClick={handleCopyToClipboard}
        aria-label={t("__FOOTER_CONTACT_COPY_BUTTON")}
      >
        <EmailIcon
          height='1.25rem'
          width='1.25rem'
        />
        {t("__FOOTER_CONTACT_COPY_BUTTON")}
      </CustomIconButton>
      <StyledSnackbar
        open={isSnackbarOpen}
        autoHideDuration={theme.timing.long}
        onClose={handleCloseSnackbar}
        TransitionComponent={Slide}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        message={t("__FOOTER_CONTACT_COPY_BUTTON_MESSAGE")}
      />
    </FooterRightWrapper>
  );
}

export default FooterRight;
