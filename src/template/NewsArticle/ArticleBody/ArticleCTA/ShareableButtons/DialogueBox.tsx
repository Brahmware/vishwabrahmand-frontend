import { Dialog, DialogTitle, DialogContent, DialogActions, Button, styled } from "@mui/material";

const DialogueTitleError = styled(DialogTitle)(({ theme }) => ({
  fontWeight: theme.customFontWeight.semiBold,
  color: theme.customColors.matmaila,
}));

const DialogueContentError = styled(DialogContent)(({ theme }) => ({
  color: theme.customColors.rakthalal,
  textAlign: 'justify',
  textAlignLast: 'start',

  [theme.breakpoints.down('md')]: {
    textAlign: 'start',
  },
}));

const DialogueBox = (
  {
    open,
    handleClose,
    shareOnPlatform
  }: {
    open: boolean,
    handleClose: () => void,
    shareOnPlatform: string
  }
) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      disableScrollLock
      aria-labelledby="sharing-dialog-title"
      aria-describedby="sharing-dialog-description"
    >
      <DialogueTitleError>Error Sharing on {shareOnPlatform}</DialogueTitleError>
      <DialogueContentError>
        We sincerely apologize for the inconvenience caused.
        Please note that sharing on <strong>{shareOnPlatform}</strong> is currently undergoing maintenance.
        We are working diligently to resolve the issue and restore full functionality as soon as possible.
        Thank you for your patience and understanding.
      </DialogueContentError>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogueBox