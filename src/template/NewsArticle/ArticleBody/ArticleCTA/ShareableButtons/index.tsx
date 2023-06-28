import { Box, styled, IconButton } from '@mui/material';
import { FacebookIcon, TwitterIcon, InstagramIcon, WhatsappIcon, ShareIcon } from '../../../../../Assets/Logo/Icons';
import DialogueBox from './DialogueBox';
import { useState } from 'react';

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

  const [open, setOpen] = useState(false);
  const [shareOnPlatform, setShareOnPlatform] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleMouseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    const shareOnPlatform = target.getAttribute('data-share-on-platform');
    setShareOnPlatform(shareOnPlatform || '');
    console.log(target.classList);
    setOpen(true);
  };

  return (
    <SharableButtonContentWrapper>
      <IconButton
        className='nohover'
        color="primary"
        size="medium"
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
        onClick={handleMouseClick}
        data-share-on-platform='Facebook'
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        className='nohover'
        color="primary"
        size="medium"
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
        onClick={handleMouseClick}
        data-share-on-platform='Twitter'
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        className='nohover'
        color="primary"
        size="medium"
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
        onClick={handleMouseClick}
        data-share-on-platform='Whatsapp'
      >
        <WhatsappIcon />
      </IconButton>
      <IconButton
        className='nohover'
        color="primary"
        size="medium"
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
        onClick={handleMouseClick}
        data-share-on-platform='Instagram'
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        className='nohover'
        color="primary"
        size="medium"
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
        onClick={handleMouseClick}
        data-share-on-platform='Link share'
      >
        <ShareIcon />
      </IconButton>
      <DialogueBox
        open={open}
        handleClose={handleClose}
        shareOnPlatform={shareOnPlatform}
      />
    </SharableButtonContentWrapper>
  );
};

export default ShareableButtons;
