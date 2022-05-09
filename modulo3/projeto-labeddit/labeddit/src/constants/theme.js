import { createTheme } from '@material-ui/core/styles';
import { primaryColor, secundaryColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secundaryColor,
    },
  },
});

export default theme