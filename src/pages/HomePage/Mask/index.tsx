import React from 'react';
import { styled, useMediaQuery, useTheme } from '@mui/material';
import MaskText from './MaskText';
import Eye from '../../../components/Eye';
import AllEyes from '../../../components/Eye/AllEyes';
import { useContainerMinHeight } from '../../../utils/useContainerMinHeight';

interface StyledH1Props {
  containerHeight: number;
}

const StyledH1 = styled('h1')<StyledH1Props>(({ theme, containerHeight }) => ({
  gridColumn: '1 / 13',
  gridRow: '1 / 13',
  zIndex: 2,
  width: '100%',
  height: containerHeight + 'px',
  margin: 0,
  padding: '0 5em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1em',
  lineHeight: '0em',

}));


const MaskingImageComponent: React.FC = () => {

  const containerHeight = useContainerMinHeight();

  const theme = useTheme();

  const extraExtraSmall = useMediaQuery(theme.mediaQueries.xxs);
  const extraSmall = useMediaQuery(theme.mediaQueries.xs);
  const small = useMediaQuery(theme.mediaQueries.sm);
  const medium = useMediaQuery(theme.mediaQueries.md);
  const large = useMediaQuery(theme.mediaQueries.lg);
  const extraLarge = useMediaQuery(theme.mediaQueries.xl);


  return (
    <>
      <StyledH1 className='noselect' containerHeight={containerHeight}>
        <svg xmlns="http://www.w3.org/2000/svg" height={`${containerHeight}`} width="100vw" viewBox={`0 0 500 300`}>
          <defs>
            <pattern id="pattern" patternUnits="userSpaceOnUse" width="100%" height="100%">
              <image xlinkHref='https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188_1280.jpg' width="100%" height="100%" />
            </pattern>
          </defs>
          {
            (extraExtraSmall || extraSmall || small) && (
              <>
                <Eye transform='scale(1.6) translate(-90, -140)' />
                <MaskText />
              </>
            )
          } {
            (medium || large || extraLarge) && (
              <>
                <AllEyes />
                <MaskText />
              </>
            )
          }
        </svg>
      </StyledH1>
      <h1 style={{ display: 'none' }}>
        The universe is all we see.
      </h1>
    </>
  );
};

export default MaskingImageComponent;
