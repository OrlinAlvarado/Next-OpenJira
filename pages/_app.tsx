import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { UIProvider } from '../context/ui/UIProvider';
import { EntriesProvider } from '../context/entries';

import { darkTheme, lightTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  );
}

export default MyApp;
