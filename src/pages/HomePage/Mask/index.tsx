import React, { useEffect } from 'react';
import { styled, useTheme } from '@mui/material';
import { useContainerMinHeight } from '../../../utils/useContainerMinHeight';
import Widescreen from './Widescreen';
import Narrowscreen from './Narrowscreen';

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
  minWidth: '320px',

  [theme.breakpoints.down('sm')]: {
    '& > svg': {
      transform: 'scale(1.25)',
    },
  },

}));


const MaskingImageComponent: React.FC = () => {

  const theme = useTheme();

  const [element, setElement] = React.useState(
    window.innerWidth < theme.breakpoints.md ?
      React.createElement(Narrowscreen) :
      React.createElement(Widescreen)
  );

  useEffect(() => {

    const handleResize = () => {
      window.innerWidth < theme.breakpoints.md ?
        setElement(<Narrowscreen />) :
        setElement(<Widescreen />);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [theme.breakpoints.md]);

  return (
    <>
      <StyledH1
        className='noselect scrollable'
        containerheight={useContainerMinHeight()}
      >
        {element}
      </StyledH1>
      <h1 style={{ display: 'none' }}>
        The universe is all we see.
      </h1>
    </>
  );
};

export default MaskingImageComponent;
