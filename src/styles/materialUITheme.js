import { createMuiTheme } from '@material-ui/core/styles';

export const materialUiTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#514aac',
      main: '#18227c',
      dark: '#00004f',
      contrastText: '#ffffff',
    },
  },
});
