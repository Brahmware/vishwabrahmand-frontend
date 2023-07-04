import React from 'react';
import { styled } from '@mui/material';
import Background from '../../Background';
import useDelayedRerender from '../../../../utils/useDelayedRerender';
import Definitions from './definitions';
import Common from './common';
import { useTranslation } from 'react-i18next';
import En from './eng';
import Bn from './bn';
import Sa from './sa';
import Hi from './hi';
import Or from './or';
import Te from './te';

const StyledSvg = styled('svg')(({ theme }) => ({
  height: '100%',
  aspectRatio: '1 / 1',
  objectFit: 'cover',
  top: '0',
  left: '0',
  zIndex: 1,
}));


const Widescreen = () => {

  // eslint-disable-next-line
  const { t: _t, i18n } = useTranslation();

  const shouldRender = useDelayedRerender();

  if (!shouldRender) {
    return null;
  }

  return (
    <React.Fragment>
      <Background className='widescreen' />
      <StyledSvg
        id="uni__svg"
        className='widescreen'
        data-name="The universe is all we see."
        xmlns="http://www.w3.org/2000/svg"
        width="900"
        viewBox="0 0 900 420"
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
              default:
                return <En />
            }
          })()
        }
      </StyledSvg>
    </React.Fragment>
  )
}

export default Widescreen