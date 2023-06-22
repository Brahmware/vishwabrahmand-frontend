import React from 'react';
import { styled } from '@mui/material';
import { useContainerMinHeight } from '../../../utils/useContainerMinHeight';
import Widescreen from './Widescreen';

interface StyledH1Props {
  containerheight: number;
}

const StyledH1 = styled('h1')<StyledH1Props>(({ theme, containerheight }) => ({
  gridColumn: '1 / 13',
  gridRow: '1 / 13',
  zIndex: 2,
  width: '100%',
  height: containerheight + 'px',
  margin: 0,
  padding: '0 5em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1em',
  lineHeight: '0em',

}));


const MaskingImageComponent: React.FC = () => {

  return (
    <>
      <StyledH1
        className='noselect scrollable'
        containerheight={useContainerMinHeight()}
      >
        <Widescreen />
      </StyledH1>
      <h1 style={{ display: 'none' }}>
        The universe is all we see.
      </h1>
    </>
  );
};

export default MaskingImageComponent;
