import { styled } from '@mui/material';
import React from 'react';
import Eyelid from './Eyelid';

export const eyePosition: { transform: string } = {
  transform: 'scale(2) translate(-125, -160)'
};

const StyledPath = styled('path')(({ theme, transform }) => ({
  stroke: theme.customColors.slogan,
  strokeWidth: '4.5',
  transform: transform || 'scale(2) translate(-125, -160)',

  [theme.breakpoints.down('md')]: {
    transform: 'scale(0.5) translate(-125, -160)',
  },
}));

const Eye = (
  {
    withoutEyelid = false,
    transform = eyePosition.transform,
  }: {
    withoutEyelid?: boolean,
    transform?: string,
  }
) => {
  return (
    <React.Fragment>
      <StyledPath
        transform={transform}
        d={
          `
          M254.5421,85.32926a66.01953,66.01953,0,0,1,8.16952,8.0835,86.94049,86.94049,0,0,1,6.23414,
          8.08349,86.0632,86.0632,0,0,1,8.63352,16.16715,84.159,84.159,0,0,1,6.12468,32.33414,86.61473,
          86.61473,0,0,1-6.35169,32.33413,87.77009,87.77009,0,0,1-14.76263,24.25064,66.593,66.593,0,0,
          1-8.04754,8.0835,7.08525,7.08525,0,0,1-9.0842,0,66.593,66.593,0,0,1-8.04754-8.0835,87.77009,
          87.77009,0,0,1-14.76263-24.25064,86.61473,86.61473,0,0,1-6.35169-32.33413,84.159,84.159,0,0,1,
          6.12468-32.33414,86.0632,86.0632,0,0,1,8.63352-16.16715,86.94049,86.94049,0,0,1,6.23414-8.08349,
          66.01953,66.01953,0,0,1,8.16952-8.0835A7.15727,7.15727,0,0,1,254.5421,85.32926Z
        `
        }
        fill="url(#pattern)"
      />
      {!withoutEyelid && (
        <Eyelid transform={transform}/>
      )}
    </React.Fragment>
  )
}

export default Eye