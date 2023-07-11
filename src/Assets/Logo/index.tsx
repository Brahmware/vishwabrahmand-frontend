import { styled } from '@mui/material';
import { ReactComponent as FullLogo } from './logo.svg';

const Logo = styled(FullLogo)(({ theme }) => ({
    height: '2.7em',
    [theme.breakpoints.down('sm')]: {
        height: '2.125em',
    },
}));

export default Logo;