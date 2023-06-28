import { Box, styled } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

const ContentWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.customSpaces.lg,
  textAlign: 'justify',
  wordBreak: 'break-word',
  textAlignLast: 'start',

  '& h1:first-child, & h2:first-child, & h3:first-child, & h4:first-child, & h5:first-child, & h6:first-child': {
    marginTop: 0,
  },

  '& h1:last-child, & h2:last-child, & h3:last-child, & h4:last-child, & h5:last-child, & h6:last-child': {
    marginBottom: 0,
  },

  '& h1, & h2, & h3, & h4, & h5, & h6': {
    margin: `${theme.customSpaces.md} 0`,
  },

  '& p': {
    fontSize: '0.9rem',
  },

  [theme.breakpoints.down('md')]: {
    '& img': {
      padding: `${theme.customPadding.sm} 0`,
    },
  },
}));

const Content = ({ contentLink }: { contentLink?: string }) => {

  const [xmlContent, setXmlContent] = useState<string>('');

  const fetchXmlContent = useCallback(async () => {
    if (!contentLink) return;
    try {
      const response = await fetch(contentLink);
      const xmlData = await response.text();
      setXmlContent(xmlData);
    } catch (error) {
      console.error('Error fetching XML content:', error);
    }
  }, [contentLink]);

  useEffect(() => {
    fetchXmlContent();
  }, [fetchXmlContent]);

  const contentRef = useCallback((node: HTMLElement | null): void => {
    if (node !== null && xmlContent) {
      const listOfNodes = node.querySelectorAll('*');
      // get only the images
      const images = Array.from(listOfNodes).filter((node) => node.nodeName === 'IMG');
      images.forEach((image) => {
        const computedStyle = window.getComputedStyle(image);

        switch (computedStyle.cssFloat) {
          case 'left':
            image.setAttribute('style', 'margin-right: 2rem; margin-bottom: 2rem; margin-top: 2rem;');
            break;
          case 'right':
            image.setAttribute('style', 'margin-left: 2rem; margin-bottom: 2rem; margin-top: 2rem;');
            break;
          default:
            image.setAttribute('style', 'margin-bottom: 2rem; margin-top: 2rem;');
            break;
        }
      });
    }
  }, [xmlContent]);

  return (
    <ContentWrapper ref={contentRef} dangerouslySetInnerHTML={{ __html: xmlContent }} />
  );
};

export default Content;
