import { useState, useEffect } from "react";

export const useSvgComponentDimensions = (componentId: string) => {
  const [componentDimensions, setComponentDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const component = document.getElementById(componentId);
    if (component) {
      setComponentDimensions({
        width: component.getBoundingClientRect().width,
        height: component.getBoundingClientRect().height,
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const component = document.getElementById(componentId);
      if (component) {
        setComponentDimensions({
          width: component.getBoundingClientRect().width,
        height: component.getBoundingClientRect().height,
        });
      }
    });
  }, []);

  return componentDimensions;
}