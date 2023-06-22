import { useEffect } from "react";

export const useAddRootClass = (className: string) => {
  useEffect(() => {
    document.getElementById('root')?.classList.add(className);

    return () => {
      document.getElementById('root')?.classList.remove(className);
    }
  }, [className]);
}