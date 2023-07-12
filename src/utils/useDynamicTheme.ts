import { useState, useEffect } from "react";
import {theme, mobileTheme} from "../theme";

function getCorrectTheme() {
  if (window.innerWidth < theme.breakpoints.sm) {
    return mobileTheme;
  } else {
    return theme;
  }
};

export const useDynamicTheme = () => {
  const [dynamicTheme, setDynamicTheme] = useState(getCorrectTheme());

  useEffect(() => {
    const handleResize = () => setDynamicTheme(getCorrectTheme());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dynamicTheme;
};