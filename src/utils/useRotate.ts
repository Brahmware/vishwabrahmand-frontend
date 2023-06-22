import { useEffect, useState } from 'react';
import config from '../config';

interface UseRotationOptions {
  rotationSensitivity?: number;
}

const useRotate = (options: UseRotationOptions = {}) => {
  const { rotationSensitivity = config.defaultRotationSensitivity } = options;
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const scrollDelta = event.deltaY;
      const rotationDelta = scrollDelta / rotationSensitivity;
      setRotation((prevRotation) => prevRotation + rotationDelta);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touchDelta = event.touches[0].clientY - event.touches[0].screenY;
        const rotationDelta = touchDelta / rotationSensitivity;
        setRotation((prevRotation) => prevRotation + rotationDelta);
      }
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [rotationSensitivity]);

  return rotation;
};

export default useRotate;