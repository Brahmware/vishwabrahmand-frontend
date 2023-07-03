import countries from 'i18n-iso-countries';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enLinks from './locales/en/links.json';
import en from './locales/en/translation.json';
import bnLinks from './locales/bn/links.json';
import bn from './locales/bn/translation.json';
import hiLinks from './locales/hi/links.json';
import hi from './locales/hi/translation.json';
import orLinks from './locales/or/links.json';
import or from './locales/or/translation.json';
import saLinks from './locales/sa/links.json';
import sa from './locales/sa/translation.json';


countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
countries.registerLocale(require('i18n-iso-countries/langs/bn.json'));
countries.registerLocale(require('i18n-iso-countries/langs/hi.json'));
// countries.registerLocale(require('i18n-iso-countries/langs/sa.json'));
// countries.registerLocale(require('i18n-iso-countries/langs/or.json'));

const resources = {
  en: { translation: en, links: enLinks },
  bn: { translation: bn, links: bnLinks },
  hi: { translation: hi, links: hiLinks },
  or: { translation: or, links: orLinks },
  sa: { translation: sa, links: saLinks },
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
    supportedLngs: ['bn', 'en', 'hi', 'or', 'sa'],
    fallbackLng: 'en',
    keySeparator: ':::',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
