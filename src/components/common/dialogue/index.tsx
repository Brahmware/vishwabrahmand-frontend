import { Button, Dialog, DialogContent, DialogTitle, styled, DialogActions } from "@mui/material";

export const DialogueCard = styled(Dialog)(({ theme }) => ({

  backdropFilter: 'blur(2px)',

  '& .MuiDialog-paper': {
    borderRadius: 0,
  },
}));

export const DialogueTitle = styled(DialogTitle)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: theme.customFontWeight.semiBold,
  color: theme.customColors.matmaila,
}));

export const DialogueContent = styled(DialogContent)(({ theme }) => ({
  color: theme.customColors.bhasma,
  fontSize: '0.875rem',
  lineHeight: '1.5 !important',
  textAlign: 'justify',
  textAlignLast: 'start',

  [theme.breakpoints.down('md')]: {
    textAlign: 'start',
  },
}));

export const DialogueButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  fontSize: '0.875rem',
  fontWeight: theme.customFontWeight.regular,
}));

export const DialogueActions = styled(DialogActions)(({ theme }) => ({}));