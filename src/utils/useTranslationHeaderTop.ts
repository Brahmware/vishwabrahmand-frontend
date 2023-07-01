import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';

const useTranslationHeaderTop = (targetElementId: string) => {
  const theme = useTheme();
  const [translation, setTranslation] = useState(0);
  const headerHeight = parseFloat(theme.customSizes.navbar) * 16; // 16px = 1rem
  const scrollBarWrapper = document.getElementById('scrollbar-component')?.childNodes[0] as HTMLElement;

  useEffect(() => {

    if (!scrollBarWrapper) return;

    const handleScroll = () => {
      const targetElement = document.getElementById(targetElementId);
      const rect = targetElement?.getBoundingClientRect();
      const top = rect?.top ?? 0;

      if (top <= headerHeight) {
        setTranslation(headerHeight - top);
      } else {
        setTranslation(0);
      }
    };

    scrollBarWrapper.addEventListener('scroll', handleScroll);

    return () => {
      scrollBarWrapper.removeEventListener('scroll', handleScroll);
    };
  }, [targetElementId, headerHeight, scrollBarWrapper]);

  return translation;
};

export default useTranslationHeaderTop;
