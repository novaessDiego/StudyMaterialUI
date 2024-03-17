import { backdropClasses, createTheme } from '@mui/material';
import { blue, purple } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      dark: blue[900],
      light: blue[500],
      contrastText: '#ffff',
    },
    
    secondary: {
      main: purple[500],
      dark: purple[400],
      light: purple[300],
      contrastText: '#ffff',
    },

    background: {
      paper: '#ffff',
      default: '#f7f6f3',
    }
  }
});
