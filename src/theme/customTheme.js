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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: 2,
          },
        },
      },
    },
  },
});

export default theme;