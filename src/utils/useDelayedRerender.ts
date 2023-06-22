import { useEffect, useState } from 'react';

function useDelayedRerender() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return shouldRender;
};

export default useDelayedRerender;