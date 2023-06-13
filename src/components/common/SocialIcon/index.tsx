import { styled } from "@mui/material";
import { Link } from "react-router-dom";

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
  filter: "grayscale(100%)",
  
  "&:hover": {
    filter: "grayscale(0%)",
  },

  "& svg": {
    height: theme.customSizes.socialIcon,
    width: theme.customSizes.socialIcon,
  },
}));