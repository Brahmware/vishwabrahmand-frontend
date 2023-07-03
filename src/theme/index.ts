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
      newsCardMaxWidth: string;
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
      newsHeadlineHeight: string;
    };
    bodyProps: {
      maxWidth: string,
      padding: string,
      margin: string,
    };
    itemBodyProps: {
      padding: string,
      margin: string,
    };
    customPadding: {
      xs: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
      xxl: string,
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
      varient_rakthalal_on_white: object,
    };

    typography: {
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

    heightBreakpoints: {
      down: (key: keyof Theme['heightBreakpoints']) => string;
      up: (key: keyof Theme['heightBreakpoints']) => string;
      between: (start: keyof Theme['heightBreakpoints'], end: keyof Theme['heightBreakpoints']) => string;
      only: (key: keyof Theme['heightBreakpoints']) => string;
      height: (key: keyof Theme['heightBreakpoints']) => number;
      mobile: number,
      tablet: number,
      laptop: number,
      desktop: number,
      largeDesktop: number,
      uhd: number,
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
      wiggly: string;
      eyeBlink: string;
      rotating: string;
      shapeShift: string;
      snapRotate: string;
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
    heightBreakpoints?: {
      mobile?: number,
      tablet?: number,
      laptop?: number,
      desktop?: number,
      largeDesktop?: number,
      uhd?: number,
    };
    mediaQueries?: Theme['mediaQueries'];
    animations?: Theme['animations'];
  }
}

const customSizes = {
  navbar: '1.295em',
  sectionTitle: '3.75em',
  sectionTitleMobile: '2.5em',
  paragraphTitle: '1.125em',
  paragraphBody: '0.85em',
  socialIcon: '1.125em',
  leaderCard: '10em',
  borderRadius: '0.33em',
  skeletonTextHeight: '1em',
  newsCardMaxWidth: '23.75em',
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
  xl: '4.5em',
  xxl: '5em',
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
  newsHeadlineHeight: '2em',
};

const itemBodyProps = {
  padding: `
    ${customPadding.xl} 0
    ${customPadding.lg} 0
  `,
  margin: '2em',
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
  varient_rakthalal_on_white: {
    '&::selection': {
      background: customColors.rakthalal,
      color: customColors.white
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

const heightBreakpoints = {
  mobile: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  largeDesktop: 1440,
  uhd: 2160,
};


const mediaQueries = {
  xxs: `@media (min-width: 0px) and (max-width: ${breakpoints.xxs}px)`,
  xs: `@media (min-width: ${breakpoints.xxs + 0.01}px) and (max-width: ${breakpoints.xs}px)`,
  sm: `@media (min-width: ${breakpoints.xs + 0.01}px) and (max-width: ${breakpoints.sm}px)`,
  md: `@media (min-width: ${breakpoints.sm + 0.01}px) and (max-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.md + 0.01}px) and (max-width: ${breakpoints.lg}px)`,
  xl: `@media (min-width: ${breakpoints.lg + 0.01}px) and (max-width: ${breakpoints.xl}px)`,
  xxl: `@media (min-width: ${breakpoints.xl + 0.01}px) and (max-width: ${breakpoints.xxl}px)`,
  uhd: `@media (min-width: ${breakpoints.xxl + 0.01}px)`,
};

const animations = {
  pulse: 'pulse 2s ease-in-out infinite',
  pinch: 'pinch 600ms ease-in',
  wiggly: 'wiggly 1200ms ease-in-out infinite',
  eyeBlink: 'eye__blink 1s ease-in-out infinite',
  rotating: 'rotation 120s infinite linear',
  shapeShift: 'shape__shift 10s linear infinite',
  snapRotate: 'snap__rotate 600ms ease-in-out',
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
  heightBreakpoints,
  mediaQueries,
  animations,
});

export default theme;
