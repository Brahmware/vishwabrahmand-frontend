import { styled, useMediaQuery, useTheme } from '@mui/material';

const TextWrapper = styled('g')(({ theme }) => ({
  transform: 'translate(0, 0)',

  [theme.breakpoints.down('sm')]: {
    transform: 'scale(0.8) translate(4em, 1em)',
  },
}));

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

const ThinTextWide = styled('text')(({ theme }) => ({
  fill: theme.customColors.slogan,
  textAnchor: 'middle',
  fontSize: '3em',
  fontWeight: theme.customFontWeight.medium,
  transform: 'translateY(-2.5em) translateX(-1em)',
}));

const ThickTextWide = styled('text')(({ theme }) => ({
  textAnchor: 'middle',
  fontSize: '3em',
  fontWeight: theme.customFontWeight.bold,
  transform: 'translateY(-2em) translateX(-1em)',
}));

const ThinTextFull = styled('text')(({ theme }) => ({
  fill: theme.customColors.slogan,
  textAnchor: 'middle',
  fontSize: '3em',
  fontWeight: theme.customFontWeight.medium,
  transform: 'translateY(-2.5em) translateX(-1em)',
}));

const ThickTextFull = styled('text')(({ theme }) => ({
  textAnchor: 'middle',
  fontSize: '3em',
  fontWeight: theme.customFontWeight.bold,
  transform: 'translateY(-2em) translateX(-1em)',
}));

const MaskText = () => {

  const theme = useTheme();

  const extraExtraSmall = useMediaQuery(theme.mediaQueries.xxs);
  const extraSmall = useMediaQuery(theme.mediaQueries.xs);
  const small = useMediaQuery(theme.mediaQueries.sm);
  const medium = useMediaQuery(theme.mediaQueries.md);
  const large = useMediaQuery(theme.mediaQueries.lg);
  const extraLarge = useMediaQuery(theme.mediaQueries.xl);

  if (extraExtraSmall || extraSmall || small) {

    return (
      <TextWrapper className='texts'>
        <ThinText x="50%" y="7.3em">The</ThinText>
        <ThickText x="50%" y="5.25em" fill="url(#pattern)">universe</ThickText>
        <ThinText x="50%" y="10.10em">is all</ThinText>
        <ThickText x="50%" y="6.575em" fill="url(#pattern)">we see.</ThickText>
      </TextWrapper>
    )
  } else if (medium) {
    return (
      <TextWrapper className='texts'>
        <ThinTextWide x="3.8em" y="8em">The</ThinTextWide>
        <ThickTextWide x="7.4em" y="7.5em" fill="url(#pattern)">universe</ThickTextWide>
        <ThinTextWide x="6.3em" y="9em">is all</ThinTextWide>
        <ThickTextWide x="6.3em" y="9.5em" fill="url(#pattern)">we see.</ThickTextWide>
      </TextWrapper>
    )
  } else if (large) {
    return (
      <TextWrapper className='texts' style={{transform: 'scale(0.8) translate(3.5em, 4em)'}}>
        <ThinTextFull x="3.8em" y="8em">The</ThinTextFull>
        <ThickTextFull x="7.4em" y="7.5em" fill="url(#pattern)">universe</ThickTextFull>
        <ThinTextFull x="6.3em" y="9em">is all</ThinTextFull>
        <ThickTextFull x="6.3em" y="9.5em" fill="url(#pattern)">we see.</ThickTextFull>
      </TextWrapper>
    )
  } else {
    return <></>
  }
}

export default MaskText