import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/customTheme';
import FormApp from './components/FormApp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormApp />
    </ThemeProvider>
  );
}

export default App;