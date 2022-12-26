import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#eeeeee",
    },
    secondary: {
      main: "#4e4e4e",
    },
    background: {
      default: '#eeeeee',
    },
    text: { 
      primary: '#4e4e4e'
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,

    h1: { fontSize: 26, fontWeight: 600},
    h2: { fontSize: 24 },
    h3: { fontSize: 20 },
    h4: { fontSize: 18 },
    h5: { fontSize: 16 },
    h6: { fontSize: 14 },
    subtitle1: { fontSize: 18 },
    body1: { fontSize: 16 },
    body2: { fontSize: 12 },
    button: { textTransform: 'none' },
  },
});

export default theme;