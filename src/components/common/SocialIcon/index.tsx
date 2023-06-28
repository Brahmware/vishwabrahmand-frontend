import { styled } from "@mui/material";

interface SocialIconProps {
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  onMouseEnter?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const SocialIcon = styled('a')<SocialIconProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  "& svg": {
    height: theme.customSizes.socialIcon,
    width: theme.customSizes.socialIcon,
  },
}));