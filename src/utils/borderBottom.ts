import { Theme } from "@mui/material"

const getBorderBottom = (
  theme: Theme, 
  arrowhovered?: boolean
) => {
  return arrowhovered ?
    `1px solid ${theme.customColors.rakthalal}` :
    `1px solid ${theme.customColors.border}`
};

export default getBorderBottom;