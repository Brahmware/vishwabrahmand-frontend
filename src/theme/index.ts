import { createTheme } from '@mui/material/styles';

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
      body: string;
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
  }
}

const customSizes = {
  navbar: '1.295em',
  sectionTitle: '3.75em',
  paragraphTitle: '1em',
  body: '1em',
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
  sm: '1em',
  md: '1.75em',
  lg: '3em',
};

const customHeights = {
  navBarHeight: '5.65em',
  footerHeight: '10em',
};

const bodyProps = {
  maxWidth: '75.5em',
  padding: '0.8em',
  margin: 'auto',
};

const palette = {
  primary: {
    main: '#707070',
  },
  secondary: {
    main: '#FF4136',
  },
  text: {
    primary: '#707070',
    secondary: '#C8C8C8',
  },
  background: {
    default: '#FFFFFF',
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
        backgroundColor: '#FFFFFF',
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
  fontFamily: 'Montserrat, sans-serif'
};

const theme = createTheme({
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
