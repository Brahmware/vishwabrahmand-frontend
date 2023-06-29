import { Dialog, DialogTitle, DialogContent, DialogActions, Button, styled } from "@mui/material";
import { useEffect } from "react";

export interface PlatformDetails {
  platform: string;
  platformIcon: JSX.Element;
  id: string;
};

const ShareingDialog = styled(Dialog)(({ theme }) => ({

  backdropFilter: 'blur(2px)',

  '& .MuiDialog-paper': {
    borderRadius: 0,
  },
}));

const DialogueTitleError = styled(DialogTitle)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: theme.customFontWeight.semiBold,
  color: theme.customColors.matmaila,
}));

const DialogueContentError = styled(DialogContent)(({ theme }) => ({
  color: theme.customColors.bhasma,
  fontSize: '0.875rem',
  textAlign: 'justify',
  textAlignLast: 'start',

  [theme.breakpoints.down('md')]: {
    textAlign: 'start',
  },
}));

const DialogueButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  fontSize: '0.875rem',
  fontWeight: theme.customFontWeight.regular,
}));

const DialogueBox = (
  {
    open,
    handleClose,
    platformDetails
  }: {
    open: boolean,
    handleClose: () => void,
    platformDetails: PlatformDetails
  }
) => {
  const target = document.getElementById(platformDetails.id);

  useEffect(() => {
    if (open) {
      if (target) {
        target.classList.remove('nohover');
      }
    }
  }, [open, platformDetails.id, target]);

  return (
    <ShareingDialog
      open={open}
      onClose={handleClose}
      disableScrollLock
      aria-labelledby="sharing-dialog-title"
      aria-describedby="sharing-dialog-description"
    >
      <DialogueTitleError>Error Sharing on {platformDetails.platform}</DialogueTitleError>
      <DialogueContentError>
        We sincerely apologize for the inconvenience caused.
        Please note that sharing on <strong>{platformDetails.platform}</strong> is currently undergoing maintenance.
        We are working diligently to resolve the issue and restore full functionality as soon as possible.
        Thank you for your patience and understanding.
      </DialogueContentError>
      <DialogActions>
        <DialogueButton
          disableElevation
          onClick={handleClose}
          variant="contained"
          color="secondary"
        >
          Close
        </DialogueButton>
      </DialogActions>
    </ShareingDialog>
  )
}

export default DialogueBox