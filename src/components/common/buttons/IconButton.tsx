import { styled, IconButton as MuiIconButton } from '@mui/material';

const IconButton = styled(({ ...props }: any) => <MuiIconButton {...props} />)(({ theme }) => ({

  color: theme.customColors.bhasma,
  backgroundColor: theme.customColors.white,
  borderRadius: '50%',
  border: `2px solid ${theme.customColors.bhasma}`,
  padding: theme.customSpaces.xxs,
  transition: 'all 0.3s ease-in-out',

  '&:hover': {
    border: `2px solid ${theme.customColors.rakthalal}`,
    backgroundColor: theme.customColors.white,
    color: theme.customColors.rakthalal,
  },
}));

export default IconButton;
