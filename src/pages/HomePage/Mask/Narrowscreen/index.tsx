import React from 'react';
import Background from '../../Background';
import { styled } from '@mui/material';
import useDelayedRerender from '../../../../utils/useDelayedRerender';
import Common from './common';
import Definitions from './definitions';
import { useTranslation } from 'react-i18next';
import Bn from './bn';
import En from './eng';
import Sa from './sa';
import Hi from './hi';
import Or from './or';
import Te from './te';
import Ta from './ta';
import Kn from './kn';

const StyledSvg = styled('svg')(({ theme }) => ({
  height: '100%',
  aspectRatio: '1/1',
  objectFit: 'cover',
  zIndex: 1,
}));

const Narrowscreen = () => {

  // eslint-disable-next-line
  const { t: _t, i18n } = useTranslation();

  const shouldRender = useDelayedRerender();

  if (!shouldRender) {
    return null;
  }

  return (
    <React.Fragment>
      <Background
        className='narrowscreen'
        screenType='narrowscreen'
      />
      <StyledSvg
        id='uni__svg'
        className='narrowscreen'
        data-name="The universe is all we see."
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 0 500 600"
      >
        <Definitions />
        <Common />
        {
          (() => {
            switch (i18n.language) {
              case 'en':
                return <En />
              case 'bn':
                return <Bn />
              case 'sa':
                return <Sa />
              case 'hi':
                return <Hi />
              case 'or':
                return <Or />
              case 'te':
                return <Te />
              case 'ta':
                return <Ta />
              case 'kn':
                return <Kn />
              default:
                return <En />
            }
          })()
        }
      </StyledSvg>
    </React.Fragment>
  )
}

export default Narrowscreen