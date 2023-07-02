import { styled } from '@mui/material';
import {
  DialogueActions,
  DialogueButton,
  DialogueCard,
  DialogueContent,
  DialogueTitle
} from '../../../common/dialogue';
import { useTranslation } from 'react-i18next';

const TranslationMenuTitle = styled(DialogueTitle)(({ theme }) => ({
  fontSize: '1.5em',
  fontWeight: 600,
  textAlign: 'center',
  padding: '1em',
}));

const TranslationMenuContent = styled(DialogueContent)(({ theme }) => ({
  maxWidth: '40em',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center',
}));

const TranslationMenuButton = styled(DialogueButton)(({ theme }) => ({
  width: '8em',
}));

const TranslationMenuActions = styled(DialogueActions)(({ theme }) => ({
  justifyContent: 'center',
  padding: '1em',
}));

const LanguageButton = ({
  children,
  onClick
}:{
  children: React.ReactNode,
  onClick?: () => void
}) => (
  <DialogueButton
    variant='text'
    onClick={onClick}
    sx={{
      textTransform: 'none',
      fontSize: '1.125em',
      height: '100%',
      width: '100%',
      padding: '0.5em 1em',
      minWidth: '8em',
      maxWidth: '10em',
    }}
  >
    {children}
  </DialogueButton>
);


const TranslationMenu = (
  {
    open,
    handleClose
  }: {
    open: boolean,
    handleClose: () => void
  }
) => {

  const { t, i18n } = useTranslation();

  return (
    <DialogueCard
      open={open}
      onClose={handleClose}
      disableScrollLock
      aria-labelledby="translation-dialog-title"
      aria-describedby="translation-dialog-description"
    >
      <TranslationMenuTitle>{t('__TRANSLATION_MENU_HEADER')}</TranslationMenuTitle>
      <TranslationMenuContent>
        <LanguageButton onClick={() => i18n.changeLanguage('bn')}>{t('__TRANSLATION_MENU_SANSKRIT')}</LanguageButton>
        <LanguageButton onClick={() => i18n.changeLanguage('bn')}>{t('__TRANSLATION_MENU_HINDI')}</LanguageButton>
        <LanguageButton onClick={() => i18n.changeLanguage('bn')}>{t('__TRANSLATION_MENU_BENGALI')}</LanguageButton>
        <LanguageButton onClick={() => i18n.changeLanguage('bn')}>{t('__TRANSLATION_MENU_ODIA')}</LanguageButton>
        <LanguageButton onClick={() => i18n.changeLanguage('bn')}>{t('__TRANSLATION_MENU_TELUGU')}</LanguageButton>
        <LanguageButton onClick={() => i18n.changeLanguage('bn')}>{t('__TRANSLATION_MENU_TAMIL')}</LanguageButton>
        <LanguageButton onClick={() => i18n.changeLanguage('bn')}>{t('__TRANSLATION_MENU_MALAYALAM')}</LanguageButton>
        <LanguageButton onClick={() => i18n.changeLanguage('bn')}>{t('__TRANSLATION_MENU_KANNADA')}</LanguageButton>
        <LanguageButton onClick={() => i18n.changeLanguage('en')} >{t('__TRANSLATION_MENU_ENGLISH')}</LanguageButton>
      </TranslationMenuContent>
      <TranslationMenuActions>
        <TranslationMenuButton
          disableElevation
          onClick={handleClose}
          variant="contained"
          color="secondary"
        >
          {t('__MENU_CLOSE')}
        </TranslationMenuButton>
      </TranslationMenuActions>
    </DialogueCard>
  )
}

export default TranslationMenu