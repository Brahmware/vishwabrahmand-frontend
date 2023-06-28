import { Box, BoxProps, Divider, Typography, styled } from '@mui/material';
import useTranslationHeaderTop from '../../../../utils/useTranslationHeaderTop';
import DocumentTitle from './DocumentTitle';
import DownloadDocumentButton from './DownloadDocumentButton';
import ShareableButtons from './ShareableButtons';
import { NewsCard } from '../../../../__mocks__/pages/presspage';
import { Fragment } from 'react';

interface ArticleCTABodyProps extends BoxProps {
  translation?: number;
};

const ArticleCTABody = styled(Box)<ArticleCTABodyProps>(({ theme, translation = 0 }) => ({
  width: '100%',
  marginTop: theme.customSpaces.lg,
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: '#F6F6F6',
  transform: `translateY(${Math.min(7.5 * 16, translation)}px)`,
  fontSize: '1em',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',

  [theme.breakpoints.down('md')]: {
    transform: 'translateY(0)',
    marginTop: 0,
    maxWidth: '24em',
    width: '100%',
    minWidth: 'unset',
    justifySelf: 'center',
  },

  [theme.breakpoints.down('sm')]: {
    
  },

}));


const ArticleCtaGroup = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.customSpaces.sm,

  '&.downloadable__content': {
    padding: `${theme.customSpaces.md} ${theme.customSpaces.lg}`,
  },

  '&.shareable__content': {
    padding: `${theme.customSpaces.md} 0`,
  },
}));


const ArticleCtaDivider = styled(Divider)(({ theme }) => ({
  width: '100%',
  border: `0.75px solid ${theme.customColors.rakthalal}`,
}));



const ArticleCTA = (
  {
    downlodable
  }: {
    downlodable?: NewsCard['downlodable'];
  }
) => {
  const translation = useTranslationHeaderTop('article-body');

  return (
    <ArticleCTABody translation={translation}>
      <ArticleCtaGroup className='shareable__content'>
        <Typography>Share this NEWS</Typography>
        <ShareableButtons />
      </ArticleCtaGroup>
      {
        downlodable && (
          <Fragment>
            <ArticleCtaDivider />
            <ArticleCtaGroup className='downloadable__content' >
              <DocumentTitle component='h1'>
                {downlodable.fileName}
              </DocumentTitle>
              <DownloadDocumentButton file={downlodable} />
            </ArticleCtaGroup>
          </Fragment>
        )
      }
    </ArticleCTABody>
  );
};

export default ArticleCTA;
