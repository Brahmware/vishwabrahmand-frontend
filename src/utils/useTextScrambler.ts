import { useState, useEffect } from 'react';

const useTextScrambler = (text: string, characters: string[], delay: number) => {
  const [scrambledText, setScrambledText] = useState(text);
  const total = text.length;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scrambleInterval = setInterval(() => {
      let scrambled = text;
      for (let i = 0; i < total; i++) {
        if (i >= progress) {
          scrambled = setCharAt(
            scrambled,
            i,
            characters[Math.round(Math.random() * (characters.length - 1))]
          );
        }
      }
      setScrambledText(scrambled);

      if (progress < total) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(scrambleInterval);
      }
    }, delay);

    return () => {
      clearInterval(scrambleInterval);
    };
  }, [text, characters, delay, total, progress]);

  const setCharAt = (str: string, index: number, chr: string) => {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
  };

  return scrambledText;
};

export default useTextScrambler;
