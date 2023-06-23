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
      setRotation((prevRotation) => prevRotation - rotationDelta);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touchDelta = event.touches[0].clientY - event.touches[0].screenY;
        const rotationDelta = touchDelta / rotationSensitivity;
        setRotation((prevRotation) => prevRotation + rotationDelta);
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      event.preventDefault();
      const initialX = event.clientX;
      const initialY = event.clientY;
      const isTopHalf = initialY < window.innerHeight / 2;
      const isLeftHalf = initialX < window.innerWidth / 2;
      const directionX = isTopHalf ? 1 : -1;
      const directionY = isLeftHalf ? -1 : 1;

      const handleMouseMove = (event: MouseEvent) => {
        const currentX = event.clientX;
        const currentY = event.clientY;
        const deltaX = currentX - initialX;
        const deltaY = currentY - initialY;
        const rotationDeltaX = (deltaX / rotationSensitivity) * directionX;
        const rotationDeltaY = (deltaY / rotationSensitivity) * directionY;
        setRotation((prevRotation) => prevRotation + rotationDeltaX + rotationDeltaY);
      };

      const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [rotationSensitivity]);

  return rotation;
};

export default useRotate;
