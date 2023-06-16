import { styled } from '@mui/material';
import { Mask } from '../../../Assets/graphics';

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



const MaskingImageComponent = () => {

  return (
    <StyledMask />
  )
}

export default MaskingImageComponent;