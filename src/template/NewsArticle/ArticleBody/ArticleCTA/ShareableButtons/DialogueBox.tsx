import { useEffect } from "react";
import {
  DialogueActions,
  DialogueButton,
  DialogueCard,
  DialogueContent,
  DialogueTitle,
} from "../../../../../components/common/dialogue";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
      <DialogueTitle>
        {t('__NEWS_ARTICLE_SHARE_ERROR_TITLE', { socialMediaName: platformDetails.platform })}
        </DialogueTitle>
      <DialogueContent>
        {t('__NEWS_ARTICLE_SHARE_ERROR_MESSAGE', { socialMediaName: platformDetails.platform })}
      </DialogueContent>
      <DialogueActions>
        <DialogueButton
          disableElevation
          onClick={handleClose}
          variant="contained"
          color="secondary"
        >
          {t("__MENU_CLOSE")}
        </DialogueButton>
      </DialogueActions>
    </DialogueCard>
  )
}

export default DialogueBox