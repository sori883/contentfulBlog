import { useState } from 'react';

import { ApolloProvider } from '@apollo/client';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

import GoogleTagManager, {
  GoogleTagManagerId,
} from 'components/nonVisual/googleTagManager';
import { SiteHead } from 'components/nonVisual/siteHead';
import { client } from 'graphql/client';
import { googleTagManagerId } from 'gtm/gtm';
import { theme } from 'theme/theme';

import 'styles/globals.css';
import 'styles/cotentEntry.scss';


function AppInit():null {
  return null;
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <ApolloProvider client={client}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={theme(colorScheme)}
        >
          <GoogleTagManager
            googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
          />
          <SiteHead />
          <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <Component {...pageProps} />
          </ColorSchemeProvider>
          <AppInit />
        </MantineProvider>
      </ApolloProvider>
    </>
  );
}
export default MyApp;