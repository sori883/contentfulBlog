import { useDarkMode } from 'storybook-dark-mode';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { theme } from '../src/theme/theme';
import 'styles/globals.css';
// import 'styles/cotentEntry.scss';
import React from 'react';


function ThemeWrapper(props) {
  const colorScheme = useDarkMode() ? 'dark' : 'light';
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={() => {}}>
      <MantineProvider theme={theme(colorScheme)} withGlobalStyles withNormalizeCSS>
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export const decorators = [(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];

export const parameters = {
  backgrounds: {
    default: 'light'
  },
};