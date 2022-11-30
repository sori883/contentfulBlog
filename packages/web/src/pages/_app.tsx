import { ApolloProvider } from '@apollo/client';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';

import GoogleTagManager, {
  GoogleTagManagerId,
} from 'components/nonVisual/googleTagManager';
import { client } from 'graphql/client';
import createEmotionCache from 'mui/createEmotionCache';
import theme from 'mui/theme';
import { googleTagManagerId } from 'types/gtm';

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
            <Component {...pageProps} />
            <AppInit />
          </ThemeProvider>
        </CacheProvider>
      </ApolloProvider>
    </>
  );
}
export default MyApp;