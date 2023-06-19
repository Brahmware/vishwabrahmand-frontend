import React from 'react';
import { styled, useTheme } from '@mui/material';
import { Mask } from '../../../Assets/graphics';
import MaskText from './MaskText';
import Eye from './Eye';
import Eyelid from './Eyelid';

const StyledMask = styled(Mask)(({ theme }) => ({
  gridColumn: '1 / 13',
  gridRow: '1 / 13',
  zIndex: 2,
  width: '100%',
  height: '100%',
  minWidth: theme.breakpoints.xxs,
  minHeight: theme.breakpoints.xxs,

  [theme.breakpoints.up('md')]: {
    transform: 'scale(1.3333)',
  },
}));


const eyePosition = {
  transform: 'scale(2) translate(-125, -160)',
};



const MaskingImageComponent: React.FC = () => {

  const theme = useTheme();



  return (
    <h1 className='noselect' style={{
      gridColumn: '1 / 13',
      gridRow: '1 / 13',
      zIndex: 2,
      width: '100%',
      height: '100%',
      minWidth: '100%',
      minHeight: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1em',
      lineHeight: '0em',
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox='0 0 500 300'>
        <defs>
          <pattern id="pattern" patternUnits="userSpaceOnUse" width="100%" height="100%">
            <image xlinkHref='https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188_1280.jpg' width="100%" height="100%" />
          </pattern>
        </defs>
        <Eye />
        <Eyelid />
        <MaskText />
      </svg>
    </h1>
  );
};

export default MaskingImageComponent;
