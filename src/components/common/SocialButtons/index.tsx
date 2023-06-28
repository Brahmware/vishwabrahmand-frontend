import { Box, styled } from '@mui/material';
import React from 'react';
import { SocialIcon } from '../SocialIcon';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../../../Assets/Logo/Icons';

export const SocialIconWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.customSpaces.sm,
  display: "flex",
  justifyContent: "center",
  gap: theme.customSpaces.md,

  '& .nohover svg': {
    '& *': {
      fill: theme.customColors.bhasma,
    }
  },

  '& svg': {
    width: theme.customSizes.socialIcon,
    height: theme.customSizes.socialIcon,
  },
}));

const SocialButtons = (
  {
    socialHandles
  }: {
    socialHandles: {
      facebook: string;
      twitter: string;
      linkedin: string;
      instagram: string;
    }
  }
) => {
  const handleHover = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    target.classList.remove('nohover');
  };

  const handleMouseOut = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    target.classList.add('nohover');
  };
  return (
    <SocialIconWrapper>
      <SocialIcon
        className='nohover'
        href={socialHandles.facebook}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseOut}
      >
        <FacebookIcon />
      </SocialIcon>
      <SocialIcon
        className='nohover'
        href={socialHandles.twitter}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseOut}
      >
        <TwitterIcon />
      </SocialIcon>
      <SocialIcon
        className='nohover'
        href={socialHandles.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseOut}
      >
        <LinkedinIcon />
      </SocialIcon>
      <SocialIcon
        className='nohover'
        href={socialHandles.instagram}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseOut}
      >
        <InstagramIcon />
      </SocialIcon>
    </SocialIconWrapper>
  )
}

export default SocialButtons