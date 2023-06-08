import { styled, useTheme } from '@mui/material';
import { useEffect, useRef, useCallback } from 'react';

const Indicator = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '1em',
  height: '1em',
  borderRadius: '50%',
  border: `1px solid ${theme.customColors.rakthalal}`,
  backgroundColor: theme.customColors.white,
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none',
  display: 'none',
  animation: theme.animations.pinch,
}));

const CursorLocationProvider: React.FC = () => {
  const cursorPositionRef = useRef({ x: 0, y: 0 });
  const circleRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    cursorPositionRef.current = { x: clientX, y: clientY };
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey) {
      showIndicator();
    }
    // eslint-disable-next-line
  }, []);

  const showIndicator = useCallback(() => {
    const circle = circleRef.current;
    if (circle) {
      circle.style.display = 'block';
      const { x, y } = cursorPositionRef.current;
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      setTimeout(() => {
        circle.style.display = 'none';
      }, theme.timing.medium * 0.9);
    }
  }, [theme.timing.medium]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleMouseMove, handleKeyDown]);

  return <Indicator ref={circleRef} />;
};

export default CursorLocationProvider;
