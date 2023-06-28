import { Box, styled, IconButton } from '@mui/material';
import { FacebookIcon, TwitterIcon, InstagramIcon, WhatsappIcon, ShareIcon } from '../../../../../Assets/Logo/Icons';
import DialogueBox, { PlatformDetails } from './DialogueBox';
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
    if(open) return;
    const target = event.currentTarget;
    target.classList.add('nohover');
  };

  const [open, setOpen] = useState(false);
  const [shareOnPlatform, setShareOnPlatform] = useState({} as PlatformDetails);

  const handleClose = () => {
    setOpen(false);
    const target = document.getElementById(shareOnPlatform.id);
    if (target) {
      target.classList.add('nohover');
    };
  };

  const handleMouseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    const shareOnPlatform = target.getAttribute('data-share-on-platform');
    if (!shareOnPlatform) return;
  
    setShareOnPlatform(
      {
        platform: shareOnPlatform,
        platformIcon: target.children[0] as unknown as JSX.Element,
        id: target.id
      }
    );
    console.log(target.classList);
    setOpen(true);
  };

  return (
    <SharableButtonContentWrapper>
      <IconButton
        id='facebook'
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
        id='twitter'
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
        id='whatsapp'
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
        id='instagram'
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
        id='link-share'
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
        platformDetails={shareOnPlatform}
      />
    </SharableButtonContentWrapper>
  );
};

export default ShareableButtons;
