import { Box, styled } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

const ContentWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.customSpaces.lg,
  textAlign: 'justify',
  wordBreak: 'break-word',
  textAlignLast: 'start',

  '& h1:first-of-type, & h2:first-of-type, & h3:first-of-type, & h4:first-of-type, & h5:first-of-type, & h6:first-of-type': {
    margin: 0,
  },

  '& h1:last-of-type, & h2:last-of-type, & h3:last-of-type, & h4:last-of-type, & h5:last-of-type, & h6:last-of-type': {
    marginBottom: 0,
  },

  '& h1, & h2, & h3, & h4, & h5, & h6': {
    textAlign: 'left',
    padding: `${theme.customSpaces.xs} 0`,

    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
    },
  },

  '& p': {
    fontSize: '0.9rem',
  },

  '& #first-paragraph-news-release-content::first-letter': {
    color: theme.customColors.rakthalal,
    float: 'left',
    fontSize: '2.5rem',
    fontWeight: theme.customFontWeight.bold,
    lineHeight: '1.33rem',
    margin: '0.5rem 0.33rem 0.33rem 0',
  },

  '& .left-aligned-image': {
    float: 'left',
    maxWidth: '40%',
    padding: `${theme.customPadding.md} ${theme.customPadding.md} ${theme.customPadding.md} 0`,
  },

  '& .right-aligned-image': {
    float: 'right',
    maxWidth: '40%',
    padding: `${theme.customPadding.md} 0 ${theme.customPadding.md} ${theme.customPadding.md}`,
  },

  '& .center-aligned-image': {
    display: 'block',
    margin: 'auto',
    padding: `${theme.customPadding.sm} 0`,
  },

  [theme.breakpoints.down('sm')]: {
    '& .left-aligned-image, & .right-aligned-image': {
      maxWidth: 'unset',
      width: '100%',
      display: 'block',
      margin: 'auto',
      padding: `${theme.customPadding.sm} 0`,
    }
  },
}));

const Content = (
  {
    contentLink,
    setContentLoading,
  }: {
    contentLink?: string;
    setContentLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }
) => {

  const [xmlContent, setXmlContent] = useState<string>('');

  const fetchXmlContent = useCallback(async () => {
    if (!contentLink) return;
    try {
      const response = await fetch(contentLink);
      const xmlData = await response.text();
      setXmlContent(xmlData);
      setContentLoading(false);
    } catch (error) {
      console.error('Error fetching XML content:', error);
    }
    
    // eslint-disable-next-line
  }, [contentLink]);

  useEffect(() => {
    fetchXmlContent();
  }, [fetchXmlContent]);

  const contentRef = useCallback((node: HTMLElement | null): void => {
    if (node !== null && xmlContent) {
      const listOfNodes = node.querySelectorAll('*');

      const images = Array.from(listOfNodes).filter((node) => node.nodeName === 'IMG');
      
      images.forEach((image) => {
        const computedStyle = window.getComputedStyle(image);

        switch (computedStyle.cssFloat) {
          case 'left':
            image.setAttribute('class', 'left-aligned-image');
            break;
          case 'right':
            image.setAttribute('class', 'right-aligned-image');
            break;
          default:
            image.setAttribute('class', 'center-aligned-image');
            break;
        }
      });

      const firstParagraph = Array.from(listOfNodes).find((node) => node.nodeName === 'P');
      if (firstParagraph) {
        firstParagraph.setAttribute('id', 'first-paragraph-news-release-content');
      }

    }
    // eslint-disable-next-line
  }, [xmlContent, setContentLoading]);

  return (
    <ContentWrapper ref={contentRef} dangerouslySetInnerHTML={{ __html: xmlContent }} />
  );
};

export default Content;
