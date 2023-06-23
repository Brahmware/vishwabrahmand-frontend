import { useEffect, useState } from 'react';

const useIsScrolled = (): boolean => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentWrapper = document.getElementById('root');
      if (contentWrapper) {
        setIsScrolled(contentWrapper.scrollTop > 10);
      }
    };

    const contentWrapper = document.getElementById('root');
    if (contentWrapper) {
      contentWrapper.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentWrapper) {
        contentWrapper.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return isScrolled;
};

export default useIsScrolled;
