import { Box, Typography, styled, useTheme } from "@mui/material"
import { COMPANY_NAME } from "../../utils/constants";

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

	return (
		<CopyrightWrapper>
			<NoWrapTypography fontWeight={theme.customFontWeight.regular}>Copyright © {thisYear}</NoWrapTypography>
			<NoWrapTypography className="noselect" fontWeight={theme.customFontWeight.bold}>{COMPANY_NAME}</NoWrapTypography>
		</CopyrightWrapper>
	)
}

export default Copyright