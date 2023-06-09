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

const Copyright = () => {

	const theme = useTheme();
	const thisYear = new Date().getFullYear();

	return (
		<CopyrightWrapper>
			<Typography fontWeight={theme.customFontWeight.regular}>Copyright © {thisYear}</Typography>
			<Typography className="noselect" fontWeight={theme.customFontWeight.bold}>{COMPANY_NAME}</Typography>
		</CopyrightWrapper>
	)
}

export default Copyright