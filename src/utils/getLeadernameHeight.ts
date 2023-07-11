import { useState, useEffect } from 'react';

export const useLeadernameHeight = (): [number, boolean] => {
  const [maxLeadernameHeight, setMaxLeadernameHeight] = useState<number>(0);
  const [shouldRenderNext, setShouldRenderNext] = useState<boolean>(false);

  useEffect(() => {
    const updateMaxHeight = (): void => {
      const leadernameElements = document.getElementsByClassName('leader__name');
      let maxHeight = 0;

      for (let i = 0; i < leadernameElements.length; i++) {
        const elementHeight = (leadernameElements[i] as HTMLElement)?.getBoundingClientRect().height;
        if (elementHeight > maxHeight) {
          maxHeight = elementHeight;
        }
      }

      setMaxLeadernameHeight(maxHeight);
    };
    
    updateMaxHeight();

    // Update on window resize
    window.addEventListener('resize', updateMaxHeight);

    const timer = setTimeout(() => {
      updateMaxHeight();
      setShouldRenderNext(true);
    }, 500);

    // Cleanup event listener on unmount
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateMaxHeight);
    };
  }, []);

  return [maxLeadernameHeight, shouldRenderNext];
};
