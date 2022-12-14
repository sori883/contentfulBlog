import { ApolloProvider } from '@apollo/client';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';

import GoogleTagManager, {
  GoogleTagManagerId,
} from 'components/nonVisual/googleTagManager';
import { SiteHead } from 'components/nonVisual/siteHead';
import { client } from 'graphql/client';
import { googleTagManagerId } from 'gtm/gtm';
import createEmotionCache from 'mui/createEmotionCache';
import theme from 'mui/theme';

import 'styles/globals.css';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function AppInit():null {
  return null;
}

function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <ApolloProvider client={client}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GoogleTagManager
              googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
            />
            <SiteHead />
            <Component {...pageProps} />
            <AppInit />
          </ThemeProvider>
        </CacheProvider>
      </ApolloProvider>
    </>
  );
}
export default MyApp;