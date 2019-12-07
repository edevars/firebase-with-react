import { createMuiTheme } from '@material-ui/core/styles';
import { orange, lightBlue } from '@material-ui/core/colors';

export const materialUiTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: lightBlue[600],
    },
  },
});
