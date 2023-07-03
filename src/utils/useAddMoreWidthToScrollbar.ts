import { useEffect } from 'react';

const useAddMoreWidthToScrollbar = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const contentWrapper = document.body;
      const distanceToRightEdge = window.innerWidth - e.pageX;

      if (contentWrapper && distanceToRightEdge < 15) {
        contentWrapper.classList.add('more-width');
      } else if (contentWrapper) {
        contentWrapper.classList.remove('more-width');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};

export default useAddMoreWidthToScrollbar;
