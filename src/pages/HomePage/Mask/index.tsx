import React from 'react';
import { styled } from '@mui/material';
import { useContainerMinHeight } from '../../../utils/useContainerMinHeight';
import Widescreen from './Widescreen';

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

  return (
    <>
      <StyledH1
        className='noselect'
        containerHeight={useContainerMinHeight()}
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
