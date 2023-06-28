import { Box, styled, IconButton } from '@mui/material';
import { FacebookIcon, TwitterIcon, InstagramIcon, WhatsappIcon, ShareIcon } from '../../../../Assets/Logo/Icons';

interface SharableButtonContentWrapperProps {
  nohover?: boolean;
}

const SharableButtonContentWrapper = styled(Box)<SharableButtonContentWrapperProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%',
  height: '100%',
  
  '& .nohover svg': {
    '& *': {
      fill: theme.customColors.bhasma,
    }
  },

  '& svg': {
    width: '1.125rem',
    height: '1.125rem',
  },
}));

const ShareableButtons: React.FC = () => {
  const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    target.classList.remove('nohover');
  };

  const handleMouseOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    target.classList.add('nohover');
  };

  return (
    <SharableButtonContentWrapper>
      <IconButton
        className='nohover'
        color="primary"
        size="medium"
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        className='nohover'
        color="primary"
        size="medium"
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        className='nohover'
        color="primary"
        size="medium"
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
      >
        <WhatsappIcon />
      </IconButton>
      <IconButton
        className='nohover'
        color="primary"
        size="medium"
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        className='nohover'
        color="primary"
        size="medium"
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
      >
        <ShareIcon />
      </IconButton>
    </SharableButtonContentWrapper>
  );
};

export default ShareableButtons;
