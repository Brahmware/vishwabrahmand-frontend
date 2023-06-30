import React from 'react'
import { DialogueActions, DialogueButton, DialogueCard, DialogueContent, DialogueTitle } from '../../../common/dialogue'

const TranslationMenu = (
  {
    open,
    handleClose
  }: {
    open: boolean,
    handleClose: () => void
  }
) => {
  return (
    <DialogueCard
      open={open}
      onClose={handleClose}
      disableScrollLock
      aria-labelledby="translation-dialog-title"
      aria-describedby="translation-dialog-description"
    >
      <DialogueTitle>Translation</DialogueTitle>
      <DialogueContent>
        We sincerely apologize for the inconvenience caused.
        Please note that translation is currently undergoing maintenance.
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

export default TranslationMenu