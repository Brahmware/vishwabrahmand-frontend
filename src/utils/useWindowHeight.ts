import { useEffect, useState } from "react";

// get height of window
export const useWindowHeight = () => {
  const [windowHeight, setHeight] = useState(window.innerHeight || 0);
  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowHeight;
}