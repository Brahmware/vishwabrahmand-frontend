import { useState, useEffect } from "react";

export const useSvgComponentDimensions = (componentId: string) => {
  const [componentDimensions, setComponentDimensions] = useState({
    width: 10,
    height: 10,
  });

  useEffect(() => {
    const component = document.getElementById(componentId);
    if (component) {
      setComponentDimensions({
        width: component.getBoundingClientRect().width,
        height: component.getBoundingClientRect().height,
      });
    }
    // eslint-disable-next-line
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

  }, [componentId]);

  return componentDimensions;
}