import { useEffect, useState } from 'react';
import config from '../config';

interface UseRotationOptions {
  rotationSensitivity?: number;
}

const useRotate = (options: UseRotationOptions = {}) => {
  const { rotationSensitivity = config.defaultRotationSensitivity } = options;
  const [rotation, setRotation] = useState(0);
  const target = document.getElementById('home-page-graphics-wrapper');

  useEffect(() => {

    if(!target) return;
    
    const handleScroll = (event: WheelEvent) => {
      let scrollDelta = event.deltaY;
      let rotationDelta = scrollDelta / rotationSensitivity;
      let initialX = event.clientX;
      let isLeftHalf = initialX < window.innerWidth / 2;
      setRotation((prevRotation) => (isLeftHalf ? prevRotation - rotationDelta : prevRotation + rotationDelta));
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        let initialX = event.touches[0].clientX;
        let initialY = event.touches[0].clientY;

        const handleTouchMoveInternal = (event: TouchEvent) => {
          let currentX = event.touches[0].clientX;
          let currentY = event.touches[0].clientY;
          let deltaX = currentX - initialX;
          let deltaY = currentY - initialY;
          let rotationDeltaX = (deltaX / rotationSensitivity);
          let rotationDeltaY = (deltaY / rotationSensitivity);

          let isTopHalf = currentY < window.innerHeight / 2;
          let isLeftHalf = currentX < window.innerWidth / 2;
          let directionX = isTopHalf ? 1 : -1;
          let directionY = isLeftHalf ? -1 : 1;

          setRotation((prevRotation) => prevRotation + rotationDeltaX * directionX + rotationDeltaY * directionY);
        };

        const handleTouchEnd = () => {
          target.removeEventListener('touchmove', handleTouchMoveInternal);
          target.removeEventListener('touchend', handleTouchEnd);
        };

        target.addEventListener('touchmove', handleTouchMoveInternal);
        target.addEventListener('touchend', handleTouchEnd);
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      event.preventDefault();
      let initialX = event.clientX;
      let initialY = event.clientY;
      let isTopHalf = initialY < window.innerHeight / 2;
      let isLeftHalf = initialX < window.innerWidth / 2;
      let directionX = isTopHalf ? 1 : -1;
      let directionY = isLeftHalf ? -1 : 1;

      const handleMouseMove = (event: MouseEvent) => {
        let currentX = event.clientX;
        let currentY = event.clientY;
        let deltaX = currentX - initialX;
        let deltaY = currentY - initialY;
        let rotationDeltaX = (deltaX / rotationSensitivity) * directionX;
        let rotationDeltaY = (deltaY / rotationSensitivity) * directionY;
        setRotation((prevRotation) => prevRotation + rotationDeltaX + rotationDeltaY);
      };

      const handleMouseUp = () => {
        target.removeEventListener('mousemove', handleMouseMove);
        target.removeEventListener('mouseup', handleMouseUp);
      };

      target.addEventListener('mousemove', handleMouseMove);
      target.addEventListener('mouseup', handleMouseUp);
    };

    target.addEventListener('wheel', handleScroll);
    target.addEventListener('touchstart', handleTouchMove);
    target.addEventListener('mousedown', handleMouseDown);

    return () => {
      target.removeEventListener('wheel', handleScroll);
      target.removeEventListener('touchstart', handleTouchMove);
      target.removeEventListener('mousedown', handleMouseDown);
    };
  }, [rotationSensitivity, target]);

  return rotation;
};

export default useRotate;
