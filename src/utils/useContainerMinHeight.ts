import { useEffect, useState } from 'react';

export const useContainerMinHeight = () => {
  const [containerMinHeight, setContainerMinHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header && footer) {
      setContainerMinHeight(window.innerHeight - header.offsetHeight - footer.offsetHeight);
    }

    const handleResize = () => {
      if (header && footer) {
        setContainerMinHeight(window.innerHeight - header.offsetHeight - footer.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return containerMinHeight < 320 ? 320 : containerMinHeight;
}

export const useContainerMaxHeight = () => {
  const [containerMinHeight, setContainerMinHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header && footer) {
      setContainerMinHeight(window.innerHeight - header.offsetHeight);
    }

    const handleResize = () => {
      if (header && footer) {
        setContainerMinHeight(window.innerHeight - header.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return containerMinHeight < 320 ? 320 : containerMinHeight;
}