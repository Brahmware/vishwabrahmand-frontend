import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import config from '../config';

const useRandomBackgroundImage = (): string => {
  const randomIndex = Math.floor(Math.random() * config.bgWallpapers.length);
  const location = useLocation();
  const [bgImage, setBgImage] = useState<string>(config.bgWallpapers[randomIndex]);

  useEffect(() => {
    const bgImageWrapper = config.bgWallpapers[randomIndex];
    setBgImage(bgImageWrapper);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return bgImage;
};

export default useRandomBackgroundImage;
