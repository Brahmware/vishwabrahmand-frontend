import { useEffect, useState } from "react";

export const useFooterHeight = () => {
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (footer) {
      setFooterHeight(footer.offsetHeight);
    }
    const handleResize = () => {
      if (footer) {
        setFooterHeight(footer.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return footerHeight;
}