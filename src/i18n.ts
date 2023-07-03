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
import teLinks from './locales/te/links.json';
import te from './locales/te/translation.json';
import taLinks from './locales/ta/links.json';
import ta from './locales/ta/translation.json';
import mlLinks from './locales/ml/links.json';
import ml from './locales/ml/translation.json';
import knLinks from './locales/kn/links.json';
import kn from './locales/kn/translation.json';


countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
countries.registerLocale(require('i18n-iso-countries/langs/bn.json'));
countries.registerLocale(require('i18n-iso-countries/langs/hi.json'));
countries.registerLocale(require('i18n-iso-countries/langs/ta.json'));
countries.registerLocale(require('i18n-iso-countries/langs/ml.json'));
// countries.registerLocale(require('i18n-iso-countries/langs/kn.json'));
// countries.registerLocale(require('i18n-iso-countries/langs/te.json'));
// countries.registerLocale(require('i18n-iso-countries/langs/sa.json'));
// countries.registerLocale(require('i18n-iso-countries/langs/or.json'));

const resources = {
  en: { translation: en, links: enLinks },
  bn: { translation: bn, links: bnLinks },
  hi: { translation: hi, links: hiLinks },
  or: { translation: or, links: orLinks },
  sa: { translation: sa, links: saLinks },
  te: { translation: te, links: teLinks },
  ta: { translation: ta, links: taLinks },
  ml: { translation: ml, links: mlLinks },
  kn: { translation: kn, links: knLinks },
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
    supportedLngs: ['bn', 'en', 'hi', 'or', 'sa', 'te', 'ta', 'ml', 'kn'],
    fallbackLng: 'en',
    keySeparator: ':::',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;

export type Lang = 'en' | 'sa' | 'hi' | 'bn' | 'or' | 'te' | 'ta' | 'ml' | 'kn';
