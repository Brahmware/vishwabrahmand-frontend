import { Box, Typography, styled, useTheme } from "@mui/material"

const BrandWrapper = styled(Box)(({ theme }) => ({
	...theme.textSelectionVarient.varient_bhashma_on_white,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: theme.customSpaces.sm
}));

const Brand = () => {

	const theme = useTheme();

	return (
		<BrandWrapper>
			<Typography className="noselect" fontWeight={theme.customFontWeight.bold}>Vishwa Brahmand Pvt. Ltd.</Typography>
			<Typography fontWeight={theme.customFontWeight.regular}>2023 All Rights Reserved.</Typography>
		</BrandWrapper>
	)
}

export default Brand