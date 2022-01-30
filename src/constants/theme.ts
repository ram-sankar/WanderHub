import { Colors } from "./models/Common";

const colors = {
  light: {
    primary: "#fca311",
    lightPrimary: '#fcbf49',
    darkPrimary: '#f77f00',
    purple: "#7209b7",
    tertiary: "#FFE358",
    text: "#323643",
    bg: "#FFFFFF",
    darkGrey: '#242424',
    gray: "#9DA3B4",
    gray2: "#C5CCD6",
    gray3: "#959ba3",
    gray4: "#545454",
    gray5: "#575a5e",
    blue: "#7583ca",
    appBackGround: '#f7f7f7',
    lightGreen: '#e1fce4',
    lightGreen2: '#ddffda',
    red: '#ff0054',
    transparent: '#00000000',
    isDark: false
  },
  dark: {
    primary: "#fca311",
    lightPrimary: '#fcbf49',
    darkPrimary: '#f77f00',
    purple: "#7209b7",
    tertiary: "#FFE358",
    text: "#FFF",
    bg: "#1a1a1a",
    darkGrey: '#c7c7c7',
    gray: "#52555e",
    gray2: "#4e5257",
    gray3: "#5d6166",
    gray4: "#9e9e9e",
    gray5: "#9da3ab",
    blue: "#7583ca",
    appBackGround: '#212121',
    lightGreen: '#e1fce4',
    lightGreen2: '#ddffda',
    red: '#ff0054',
    transparent: '#00000000',
    isDark: true
  }
} as Colors;

const sizes = {
  // global sizes
  base: 16,
  fontXS: 10,
  fontS: 12,
  font: 14,
  fontL: 16,
  fontXL: 18,
  fontXXL: 20,
  fontXXXL: 22,
  radius: 6,
  padding: 10,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  caption: 12
} as { [key: string]: number; };

const fonts = {
  h1: {
    fontSize: sizes.h1
  },
  h2: {
    fontSize: sizes.h2
  },
  h3: {
    fontSize: sizes.h3
  },
  header: {
    fontSize: sizes.header
  },
  title: {
    fontSize: sizes.title
  },
  body: {
    fontSize: sizes.body
  },
  caption: {
    fontSize: sizes.caption
  }
} as { [key: string]: Object; };

export { colors, sizes, fonts };
