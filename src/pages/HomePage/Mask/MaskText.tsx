import { styled } from '@mui/material';

const ThinText = styled('text')(({ theme }) => ({
  fill: theme.customColors.slogan,
  textAnchor: 'middle',
  fontSize: '3em',
  fontWeight: theme.customFontWeight.medium,
  transform: 'translateY(-2.5em)',
}));

const ThickText = styled('text')(({ theme }) => ({
  textAnchor: 'middle',
  fontSize: '6em',
  fontWeight: theme.customFontWeight.bold,
  transform: 'translateY(-2em)',
}));

const MaskText = () => {
  return (
    <g className='texts'>
      <ThinText x="50%" y="7.3em">The</ThinText>
      <ThickText x="50%" y="5.25em" fill="url(#pattern)">universe</ThickText>
      <ThinText x="50%" y="10.10em">is all</ThinText>
      <ThickText x="50%" y="6.575em" fill="url(#pattern)">we see.</ThickText>
    </g>
  )
}

export default MaskText