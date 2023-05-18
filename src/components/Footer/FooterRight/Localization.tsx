import { Box, styled } from '@mui/material';
import { TranslationIcon as LocalizationIcon } from '../../../Assets/Logo/Icons';

const LocalizationWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.customSpaces.sm
}));

const Localization = () => {
  return (
    <LocalizationWrapper>
      <LocalizationIcon height='1.5em'/>
      <div>Eng (Ind)</div>
    </LocalizationWrapper>
  )
}

export default Localization