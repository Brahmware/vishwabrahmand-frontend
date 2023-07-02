import { Box, Typography, styled, useTheme } from "@mui/material"
import { useTranslation } from "react-i18next";

const CopyrightWrapper = styled(Box)(({ theme }) => ({
	...theme.textSelectionVarient.varient_bhashma_on_white,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: theme.customSpaces.sm,

	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
		gap: theme.customSpaces.xs,
	},
}));

const NoWrapTypography = styled(Typography)(({ theme }) => ({
	whiteSpace: 'nowrap',
}));

const Copyright = () => {

	const theme = useTheme();
	const thisYear = new Date().getFullYear();

	const {t} = useTranslation();

	return (
		<CopyrightWrapper>
			<NoWrapTypography fontWeight={theme.customFontWeight.regular}>{t('__FOOTER_COPYRIGHT', { year: thisYear })}</NoWrapTypography>
			<NoWrapTypography className="noselect" fontWeight={theme.customFontWeight.bold}>{t("__FOOTER_COMPANY_NAME")}</NoWrapTypography>
		</CopyrightWrapper>
	)
}

export default Copyright