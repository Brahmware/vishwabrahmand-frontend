import { styled } from "@mui/material";

interface SocialIconProps {
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const SocialIcon = styled('a')<SocialIconProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: theme.transitions.create("filter", {
    duration: theme.transitions.duration.standard,
  }),
  filter: theme.grayScales.g_100,
  
  "&:hover": {
    filter: theme.grayScales.g_0,
  },

  "& svg": {
    height: theme.customSizes.socialIcon,
    width: theme.customSizes.socialIcon,
  },
}));