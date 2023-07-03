// this hook is used to set the language to the html tag

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useSetLanguageToHtml = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.body.classList.forEach((className) => {
      document.body.classList.remove(className);
    });
    document.body.classList.add(i18n.language);
  }, [i18n.language]);
}