import type { ColorScheme, MantineThemeOverride } from '@mantine/core';

export const theme = (colorScheme: ColorScheme): MantineThemeOverride => {

  return {
  // ダークモード
    colorScheme: colorScheme,

    // ブランドカラーを追加
    colors: {
      brand: ['#C48847', '#C48847', '#C48847', '#C48847', '#C48847', '#C48847', '#C48847', '#C48847', '#C48847', '#C48847']
    },
    
    // ブランドカラーをデフォルトカラーにする
    primaryColor: 'brand',

    fontSizes: {
      xs: '0.4rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.1rem',
      xl: '1.3rem',
      tagChip: '0.8rem',
    },

    primaryShade: {
      light: 6,
      dark: 8,
    },

    white: '#edf2f7',
    black: '#000',

    // taillwindのbreakpointに合わせる
    breakpoints: {
      sm: '640',
      md: '768',
      lg: '1024',
      xl: '1280',
      '2xl': '1536',
    },
  };
};