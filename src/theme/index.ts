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
    customPadding: {
      sm: string,
      md: string,
      lg: string,
    };

    customSpaces: {
      xs: string,
      sm: string,
      md: string,
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
    }
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
    bodyProps?: Theme['bodyProps'];
    typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
    props?: {
      MuiTypography?: {
        display?: string
      }
    }
  }
}

const customSizes = {
  navbar: '1.295em',
  sectionTitle: '3.75em',
  paragraphTitle: '1.125em',
  paragraphBody: '0.75em',
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
};

const customSpaces = {
  xs: '0.5em',
  sm: '1em',
  md: '1.75em',
  lg: '3em',
};

const customHeights = {
  navBarHeight: '5.65em',
  footerHeight: '10em',
  loadingBoxHeight: '5em',
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
  bodyProps,
  typography,
  components,
});

export default theme;
