import { useTheme } from '@mui/material';

const Definitions = () => {

  const theme = useTheme();

  return (
    <defs>
      <style>
        {`
          .masking__layer {
            fill: ${theme.customColors.white};
          }

          .visible__layer {
            fill: ${theme.customColors.slogan};
          }

          .eye__stroke {
            fill: none;
            stroke: ${theme.customColors.slogan};
            stroke-miterlimit: 10;
            stroke-width: 9px;
          }
        `}
      </style>
    </defs>
  )
}

export default Definitions