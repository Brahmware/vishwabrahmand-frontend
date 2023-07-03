import { ButtonProps, styled } from '@mui/material';
import {
  DialogueActions,
  DialogueButton,
  DialogueCard,
  DialogueContent,
  DialogueTitle
} from '../../../common/dialogue';
import { useTranslation } from 'react-i18next';
import config from '../../../../config';

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
  gap: '1em',
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
  onClick,
  languageName,
}: {
  children: React.ReactNode,
  onClick?: () => void,
  languageName: string,
}) => {
  const { i18n } = useTranslation();
  const isActive = i18n.language === languageName;

  return (
    <TranslationMenuButton
      disableElevation
      onClick={onClick}
      color={isActive ? 'secondary' : 'primary'}
      variant={isActive ? 'outlined' : 'text'}
    >
      {children}
    </TranslationMenuButton>
  );
};


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

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    handleClose();
  };


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
        <LanguageButton
          onClick={() => handleLanguageChange(config.languageIsoCodes.sanskrit)}
          languageName={config.languageIsoCodes.sanskrit}
        >
          {t('__TRANSLATION_MENU_SANSKRIT')}
        </LanguageButton>
        <LanguageButton
          onClick={() => handleLanguageChange(config.languageIsoCodes.hindi)}
          languageName={config.languageIsoCodes.hindi}
        >
          {t('__TRANSLATION_MENU_HINDI')}
        </LanguageButton>
        <LanguageButton
          onClick={() => handleLanguageChange(config.languageIsoCodes.bengali)}
          languageName={config.languageIsoCodes.bengali}
        >
          {t('__TRANSLATION_MENU_BENGALI')}
        </LanguageButton>
        <LanguageButton
          onClick={() => handleLanguageChange(config.languageIsoCodes.odia)}
          languageName={config.languageIsoCodes.odia}
        >
          {t('__TRANSLATION_MENU_ODIA')}
        </LanguageButton>
        <LanguageButton
          onClick={() => handleLanguageChange(config.languageIsoCodes.telugu)}
          languageName={config.languageIsoCodes.telugu}
        >
          {t('__TRANSLATION_MENU_TELUGU')}
        </LanguageButton>
        <LanguageButton
          onClick={() => handleLanguageChange(config.languageIsoCodes.tamil)}
          languageName={config.languageIsoCodes.tamil}
        >
          {t('__TRANSLATION_MENU_TAMIL')}
        </LanguageButton>
        <LanguageButton
          onClick={() => handleLanguageChange(config.languageIsoCodes.malayalam)}
          languageName={config.languageIsoCodes.malayalam}
        >
          {t('__TRANSLATION_MENU_MALAYALAM')}
        </LanguageButton>
        <LanguageButton
          onClick={() => handleLanguageChange(config.languageIsoCodes.kannada)}
          languageName={config.languageIsoCodes.kannada}
        >
          {t('__TRANSLATION_MENU_KANNADA')}
        </LanguageButton>
        <LanguageButton
          onClick={() => handleLanguageChange(config.languageIsoCodes.english)}
          languageName={config.languageIsoCodes.english}
        >
          {t('__TRANSLATION_MENU_ENGLISH')}
        </LanguageButton>
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