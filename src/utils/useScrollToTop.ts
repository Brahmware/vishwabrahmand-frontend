import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface ScrollToOptions {
  top: number;
  behavior: 'smooth';
}

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const scrollTo: ScrollToOptions = { top: 0, behavior: 'smooth' };

  useEffect(() => {
    const scrollableBody = document.getElementById('scrollbar-component')?.childNodes[0] as HTMLElement;
    if (scrollableBody) {
      scrollableBody.scrollTo(scrollTo);
    } else {
      window.scrollTo(scrollTo);
    }
  }, [pathname]);
}