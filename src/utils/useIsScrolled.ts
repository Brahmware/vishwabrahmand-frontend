import { useEffect, useState } from 'react';

interface DragDirection {
  left: boolean;
  right: boolean;
}

const useIsScrolled = (): [boolean, DragDirection] => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dragDirection, setDragDirection] = useState<DragDirection>({
    left: false,
    right: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const contentWrapper = document.getElementById('root');
      if (contentWrapper) {
        setIsScrolled(contentWrapper.scrollTop > 10);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touchX = event.touches[0].clientX;

      const handleTouchMove = (event: TouchEvent) => {
        const currentTouchX = event.touches[0].clientX;
        const deltaX = currentTouchX - touchX;

        setDragDirection({
          left: deltaX < 0,
          right: deltaX > 0,
        });
      };

      const handleTouchEnd = () => {
        setDragDirection({
          left: false,
          right: false,
        });

        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };

      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    };

    const contentWrapper = document.getElementById('root');
    if (contentWrapper) {
      contentWrapper.addEventListener('scroll', handleScroll);
      contentWrapper.addEventListener('touchstart', handleTouchStart);
    }

    return () => {
      if (contentWrapper) {
        contentWrapper.removeEventListener('scroll', handleScroll);
        contentWrapper.removeEventListener('touchstart', handleTouchStart);
      }
    };
  }, []);

  return [isScrolled, dragDirection];
};

export default useIsScrolled;
