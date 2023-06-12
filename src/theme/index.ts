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
      border: string;
      lightBorder: string;
    };
    customSizes: {
      navbar: string;
      sectionTitle: string;
      sectionTitleMobile: string;
      paragraphTitle: string;
      paragraphBody: string;
      socialIcon: string;
      leaderCard: string;
      borderRadius: string;
      skeletonTextHeight: string;
    };
    customWeight: {
      navbar: number;
      sectionTitle: number;
      paragraphTitle: number;
      body: number;
    };
    customHeights: {
      navBarHeight: string;
      navPanelHeight: string;
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
      xs: string,
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

    timing: {
      short: number,
      medium: number,
      long: number,
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
      down: (key: keyof Theme['breakpoints']) => string;
      up: (key: keyof Theme['breakpoints']) => string;
      between: (start: keyof Theme['breakpoints'], end: keyof Theme['breakpoints']) => string;
      only: (key: keyof Theme['breakpoints']) => string;
      width: (key: keyof Theme['breakpoints']) => number;
      xxs: number;
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
      uhd: number;
    };

    mediaQueries: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      uhd: string;
    };

    animations: {
      pulse: string;
      pinch: string;
    };

    grayScales: {
      g_100: string;
      g_80: string;
      g_60: string;
      g_40: string;
      g_20: string;
      g_10: string;
      g_5: string;
      g_0: string;
    }
  }


  interface ThemeOptions {
    customColors?: Theme['customColors'];
    grayScales?: Theme['grayScales'];
    customSizes?: Theme['customSizes'];
    customWeight?: Theme['customWeight'];
    customHeights?: Theme['customHeights'];
    customPadding?: Theme['customPadding'];
    customSpaces?: Theme['customSpaces'];
    customFontWeight?: Theme['customFontWeight'];
    timing?: Theme['timing'];
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
      xxs?: number;
      xs?: number;
      sm?: number;
      md?: number;
      lg?: number;
      xl?: number;
      xxl?: number;
      uhd?: number;
    };
    mediaQueries?: Theme['mediaQueries'];
    animations?: Theme['animations'];
  }
}

const customSizes = {
  navbar: '1.295em',
  sectionTitle: '3.75em',
  sectionTitleMobile: '2.75em',
  paragraphTitle: '1.125em',
  paragraphBody: '0.75em',
  socialIcon: '1em',
  leaderCard: '10em',
  borderRadius: '0.33em',
  skeletonTextHeight: '1em',
};

const customColors = {
  white: '#FFFFFF',
  bhasma: '#707070',
  rakthalal: '#FF4136',
  matmaila: '#C8C8C8',
  slogan: '#DDDDDD',
  border: 'rgba(0, 0, 0, 0.1)',
  lightBorder: 'rgba(0, 0, 0, 0.05)',
};

const grayScales = {
  g_100: 'grayscale(100%)',
  g_80: 'grayscale(80%)',
  g_60: 'grayscale(60%)',
  g_40: 'grayscale(40%)',
  g_20: 'grayscale(20%)',
  g_10: 'grayscale(10%)',
  g_5: 'grayscale(5%)',
  g_0: 'grayscale(0%)',
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

const timing = {
  short: 300,
  medium: 600,
  long: 1200,
};

const customPadding = {
  xs: '0.5em',
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
  navBarHeight: '4.5em',
  navPanelHeight: '3em',
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
  xxs: 320,
  xs: 375,
  sm: 480,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560,
  uhd: 3840,
};

const mediaQueries = {
  xxs: `@media (max-width: ${breakpoints.xxs}px)`,
  xs: `@media (max-width: ${breakpoints.xs}px)`,
  sm: `@media (max-width: ${breakpoints.sm}px)`,
  md: `@media (max-width: ${breakpoints.md}px)`,
  lg: `@media (max-width: ${breakpoints.lg}px)`,
  xl: `@media (max-width: ${breakpoints.xl}px)`,
  xxl: `@media (max-width: ${breakpoints.xxl}px)`,
  uhd: `@media (max-width: ${breakpoints.uhd}px)`,
};

const animations = {
  pulse: 'pulse 2s ease-in-out infinite',
  pinch: 'pinch 600ms ease-in',
};

const theme = createTheme({
  props,
  palette,
  customColors,
  grayScales,
  customSizes,
  customWeight,
  customHeights,
  customPadding,
  customSpaces,
  customFontWeight,
  timing,
  textSelectionVarient,
  itemBodyProps,
  bodyProps,
  typography,
  components,
  breakpoints,
  mediaQueries,
  animations,
});

export default theme;
