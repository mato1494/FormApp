import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        '*::before': {
          boxSizing: 'border-box',
        },
        '*::after': {
          boxSizing: 'border-box',
        },
      },
    },
  },
});

export default theme;