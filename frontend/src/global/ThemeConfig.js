import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // main: '#49A5FF',
      // main: '#5CDB95',
      // main: '#3AAFA9'
      // main: '#65CCB8',
      // main: '#222629',
      main: '#4375bc'
    },
    secondary: {
      // main: '#FF5733',
      // main: '#86C232',
      // main: '#4375bc'
      main: '#b805ff'
    },
    contrast: {
        main: '#ffffff',
    }
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // color: '#ffffff', // Set the text color of all buttons to white
          // color: '#05386B',
          color: '#86C232'
        },
      },
    },
  },
});

export default theme;
