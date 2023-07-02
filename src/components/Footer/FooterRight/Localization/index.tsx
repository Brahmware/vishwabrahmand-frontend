import { Box, Button, Typography, styled } from "@mui/material";
import { TranslationIcon as LocalizationIcon } from "../../../../Assets/Logo/Icons";
import { useState } from "react";
import TranslationMenu from "./TranslationMenu";
import { useTranslation } from "react-i18next";

const LocalizationWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.customSpaces.sm
}));

const LocalizationButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.customSpaces.sm,

  '&:hover': {
    backgroundColor: 'transparent'
  },
}));

const ButtonText = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  fontWeight: theme.customFontWeight.medium,
  color: theme.customColors.bhasma,
  textTransform: 'none',
  whiteSpace: 'nowrap',
}));

const Localization = () => {

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const { t } = useTranslation();

  return (
    <LocalizationWrapper>
      <LocalizationButton
        variant='text'
        disableRipple
        onClick={() => setOpen(true)}
      >
        <LocalizationIcon height='1.5em' />
        <ButtonText>{t("__FOOTER_TRANSLATION_MENU_BUTTON")}</ButtonText>
      </LocalizationButton>
      <TranslationMenu 
        open={open}
        handleClose={handleClose}
      />
    </LocalizationWrapper>
  )
}

export default Localization