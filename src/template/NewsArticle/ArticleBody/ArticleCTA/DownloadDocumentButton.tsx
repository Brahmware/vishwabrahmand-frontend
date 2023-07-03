import { BoxProps, Button, ButtonBaseProps, styled } from "@mui/material";
import { NewsCard } from "../../../../__mocks__/pages/newspage";
import { useTranslation } from "react-i18next";

interface FlatButtonProps extends ButtonBaseProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  disableRipple?: boolean;
  disableFocusRipple?: boolean;
  fullWidth?: boolean;
  href?: string;
  component?: React.ElementType;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset' | 'button';
  sx?: BoxProps['sx'];
  children?: React.ReactNode;
}

const FlatButton = styled(Button)<FlatButtonProps>(({ theme }) => ({
  borderRadius: 0,
  padding: `${theme.customSpaces.xs} ${theme.customSpaces.md}`,
  fontSize: '0.95rem',
  fontWeight: theme.customFontWeight.regular,
}));

interface DownloadDocumentButtonProps {
  file?: NewsCard['downlodable'];
}

const DownloadDocumentButton = ({ file }: DownloadDocumentButtonProps) => {

  const { t } = useTranslation();

  if (!file) {
    return null;
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = file.file;
    link.download = file.fileName;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };

  return (
    <FlatButton
      variant='contained'
      color='secondary'
      disableElevation
      onClick={handleDownload}
    >
      {t("__BUTTON_DOWNLOAD")}
    </FlatButton>
  );
}

export default DownloadDocumentButton;
