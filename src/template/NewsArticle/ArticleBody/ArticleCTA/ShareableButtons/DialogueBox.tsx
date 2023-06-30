import { useEffect } from "react";
import { 
  DialogueActions,
  DialogueButton,
  DialogueCard, 
  DialogueContent, 
  DialogueTitle,
} from "../../../../../components/common/dialogue";

export interface PlatformDetails {
  platform: string;
  platformIcon: JSX.Element;
  id: string;
};

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
    <DialogueCard
      open={open}
      onClose={handleClose}
      disableScrollLock
      aria-labelledby="sharing-dialog-title"
      aria-describedby="sharing-dialog-description"
    >
      <DialogueTitle>Error Sharing on {platformDetails.platform}</DialogueTitle>
      <DialogueContent>
        We sincerely apologize for the inconvenience caused.
        Please note that sharing on <strong>{platformDetails.platform}</strong> is currently undergoing maintenance.
        We are working diligently to resolve the issue and restore full functionality as soon as possible.
        Thank you for your patience and understanding.
      </DialogueContent>
      <DialogueActions>
        <DialogueButton
          disableElevation
          onClick={handleClose}
          variant="contained"
          color="secondary"
        >
          Close
        </DialogueButton>
      </DialogueActions>
    </DialogueCard>
  )
}

export default DialogueBox