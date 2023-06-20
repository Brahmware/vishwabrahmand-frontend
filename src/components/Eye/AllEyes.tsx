import { styled } from '@mui/material'
import Eye from '.';

const AllEyesWrapper = styled('g')(({ theme }) => ({
  transform: 'scale(0.5) translate(50%, 40%)',

  [theme.breakpoints.up('md')]: {
    transform: 'scale(0.5) translate(50%, 50%)',
  },

  [theme.breakpoints.up('lg')]: {
    transform: 'scale(0.3) translate(35em, 80%)',
  },
}));

const ThirdEye = styled('g')(({ theme }) => ({
  transform: 'translate(-3.5em, -12%) scale(1.25)'
}));

const MainEyes = styled('g')(({ theme }) => ({
  transform: 'translate(-4em, 10em)'
}));

const LeftEye = styled('g')(({ theme }) => ({
  transform: 'translate(30em, -15em) rotate(90deg)'
}));

const RightEye = styled('g')(({ theme }) => ({
  transform: 'translate(10em, -15em) rotate(90deg)'
}));

const AllEyes = () => {
  return (
    <AllEyesWrapper>
      <ThirdEye id="third__eye">
        <Eye withoutEyelid />
      </ThirdEye>
      <MainEyes>
        <LeftEye id="left__eye">
          <Eye />
        </LeftEye>
        <RightEye id="right__eye">
          <g style={{ transform: 'scale(1, -1)' }}>
            <Eye />
          </g>
        </RightEye>
      </MainEyes>
    </AllEyesWrapper>
  )
}

export default AllEyes