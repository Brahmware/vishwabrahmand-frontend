import { createTheme, Palette } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
  interface Theme {
    customColors: {
      white: string;
      bhasma: string;
      rakthalal: string;
      matmaila: string;
      slogan: string;
    };
    customSizes: {
      navbar: string;
      sectionTitle: string;
      paragraphTitle: string;
      paragraphBody: string;
      socialIcon: string;
      leaderCard: string;
      borderRadius: string;
    };
    customWeight: {
      navbar: number;
      sectionTitle: number;
      paragraphTitle: number;
      body: number;
    };
    customHeights: {
      navBarHeight: string;
      footerHeight: string;
      loadingBoxHeight: string;
    };
    bodyProps: {
      maxWidth: string,
      padding: string,
      margin: string,
    };
    itemBodyProps: {
      padding: string,
    };
    customPadding: {
      sm: string,
      md: string,
      lg: string,
      xl: string,
    };

    customSpaces: {
      xxs: string,
      xs: string,
      sm: string,
      md: string,
      xl: string,
      lg: string,
    };

    customFontWeight: {
      thin: number,
      light: number,
      regular: number,
      medium: number,
      semiBold: number,
      bold: number,
      extraBold: number,
      black: number
    };

    textSelectionVarient: {
      varient_bhashma_on_white: object,
      varient_matmaila_on_bhashma: object,
    };

    typography: {
      // ... existing typography properties ...
      body2: {
        lineHeight: number;
      };
    };

    props: {
      MuiTypography: {
        display: string
      }
    };

    breakpoints: {
      values: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
        uhd: number;
      };
    };
  }


  interface ThemeOptions {
    customColors?: Theme['customColors'];
    customSizes?: Theme['customSizes'];
    customWeight?: Theme['customWeight'];
    customHeights?: Theme['customHeights'];
    customPadding?: Theme['customPadding'];
    customSpaces?: Theme['customSpaces'];
    customFontWeight?: Theme['customFontWeight'];
    textSelectionVarient?: Theme['textSelectionVarient'];
    itemBodyProps?: Theme['itemBodyProps'];
    bodyProps?: Theme['bodyProps'];
    typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
    props?: {
      MuiTypography?: {
        display?: string
      }
    };
    breakpoints?: {
      values?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        xxl?: number;
        uhd?: number;
      };
    };
  }
}

const customSizes = {
  navbar: '1.295em',
  sectionTitle: '3.75em',
  paragraphTitle: '1.125em',
  paragraphBody: '0.75em',
  socialIcon: '0.85em',
  leaderCard: '10em',
  borderRadius: '0.33em',
};

const customColors = {
  white: '#FFFFFF',
  bhasma: '#707070',
  rakthalal: '#FF4136',
  matmaila: '#C8C8C8',
  slogan: '#DDDDDD',
};


const customFontWeight = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900
}

const customWeight = {
  navbar: 500,
  sectionTitle: 700,
  paragraphTitle: 600,
  body: 300,
};

const customPadding = {
  sm: '1em',
  md: '1.75em',
  lg: '3em',
  xl: '4.5em'
};

const customSpaces = {
  xxs: 'calc(1.75em / 8)',
  xs: '0.5em',
  sm: '1em',
  md: '1.75em',
  lg: '3em',
  xl: '4.5em',
};

const customHeights = {
  navBarHeight: '5.65em',
  footerHeight: '10em',
  loadingBoxHeight: '5em',
};

const itemBodyProps = {
  padding: `${customPadding.xl} ${customPadding.sm} 0`,
};

const bodyProps = {
  maxWidth: '75.5em',
  padding: '0.8em',
  margin: 'auto',
};

const palette = {
  primary: {
    main: customColors.bhasma,
  },
  secondary: {
    main: customColors.rakthalal,
  },
  text: {
    primary: customColors.bhasma,
    secondary: customColors.matmaila,
  },
  background: {
    default: customColors.white,
  },
};

const textSelectionVarient = {
  varient_bhashma_on_white: {
    '&::selection': {
      background: customColors.bhasma,
      color: customColors.white
    },

    '& > *::selection': {
      background: customColors.bhasma,
      color: customColors.white
    }
  },
  varient_matmaila_on_bhashma: {
    '&::selection': {
      background: customColors.bhasma,
      color: customColors.matmaila
    }
  },
}

const components = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        ...bodyProps,
        backgroundColor: customColors.white,
        boxShadow: 'none',
        fontWeight: customWeight.navbar,
        height: customHeights.navBarHeight,

        '& .nav__panel': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.55em'
        }
      },
    },
  },
};

const typography = {
  fontFamily: 'Montserrat, sans-serif',
  body2: {
    lineHeight: 1.125,
  },
};

const props = {
  MuiTypography: {
    display: 'block',
  },
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 1920,
    uhd: 3840,
  }
}

const theme = createTheme({
  props,
  palette,
  customColors,
  customSizes,
  customWeight,
  customHeights,
  customPadding,
  customSpaces,
  customFontWeight,
  textSelectionVarient,
  itemBodyProps,
  bodyProps,
  typography,
  components,
  breakpoints,
});

export default theme;
