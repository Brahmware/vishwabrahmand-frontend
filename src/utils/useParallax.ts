import React from "react";

export const useParallax = ({ slag }: { slag: number }) => {
  const [scroll, setScroll] = React.useState(0);
  const scrollComponet = document.getElementById('scrollbar-component')?.childNodes[0] as HTMLElement;

  React.useEffect(() => {

    if (!scrollComponet) {
      const handleScroll = () => {
        const scroll = document.body.scrollTop || document.documentElement.scrollTop;
        setScroll(scroll);
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      const handleScroll = () => {
        const scroll = scrollComponet ? scrollComponet.scrollTop : document.body.scrollTop;
        setScroll(scroll);
      };

      scrollComponet.addEventListener('scroll', handleScroll);

      return () => scrollComponet.removeEventListener('scroll', handleScroll);
    }
  }, [scrollComponet]);

  return scroll * 1 / slag;
};