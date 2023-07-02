import countries from 'i18n-iso-countries';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enLinks from './locales/en/links.json';
import en from './locales/en/translation.json';
import bnLinks from './locales/bn/links.json';
import bn from './locales/bn/translation.json';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
countries.registerLocale(require('i18n-iso-countries/langs/it.json'));
countries.registerLocale(require('i18n-iso-countries/langs/es.json'));

const resources = {
  en: { translation: en, links: enLinks },
  bn: { translation: bn, links: bnLinks },
};

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: {
      order: ['querystring', 'path', 'subdomain', 'localStorage', 'navigator'], // 'cookie',
    },
    contextSeparator: '_',
    ns: ['common', 'translation', 'links'],
    defaultNS: 'translation',
    returnEmptyString: false,
    nsSeparator: false,
    resources,
    supportedLngs: ['bn', 'en'],
    fallbackLng: 'en',
    keySeparator: ':::',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
