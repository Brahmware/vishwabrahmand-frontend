import { useState, useEffect } from 'react';

const useTextScrambler = (
  initialText404: string,
  initialTextLink: string,
  characters: string[],
  delay: number
) => {
  const [text404, setText404] = useState(initialText404);
  const [textLink, setTextLink] = useState(initialTextLink);

  useEffect(() => {
    const setCharAt = (str: string, index: number, chr: string) => {
      if (index > str.length - 1) return str;
      return str.substr(0, index) + chr + str.substr(index + 1);
    };

    const total404 = initialText404.length;
    const totalLink = initialTextLink.length;

    let progress404 = 0;
    let progressLink = 0;

    const scrambleInterval = setInterval(() => {
      let scrambled404 = text404;
      let scrambledLink = textLink;

      for (let i = 0; i < total404; i++) {
        if (i >= progress404) {
          scrambled404 = setCharAt(
            scrambled404,
            i,
            characters[Math.round(Math.random() * (characters.length - 1))]
          );
        }
      }

      for (let i = 0; i < totalLink; i++) {
        if (i >= progressLink) {
          scrambledLink = setCharAt(
            scrambledLink,
            i,
            characters[Math.round(Math.random() * (characters.length - 1))]
          );
        }
      }

      setText404(scrambled404);
      setTextLink(scrambledLink);
    }, 1000 / 60);

    setTimeout(() => {
      const revealInterval = setInterval(() => {
        if (progress404 < total404) {
          progress404++;
        } else if (progressLink < totalLink) {
          progressLink++;
        } else {
          clearInterval(revealInterval);
          clearInterval(scrambleInterval);
        }
      }, 50);
    }, 1000);

    return () => {
      clearInterval(scrambleInterval);
    };
  }, []);

  // eslint-disable-next-line
  return { text404, textLink, characters };
};

export default useTextScrambler;
