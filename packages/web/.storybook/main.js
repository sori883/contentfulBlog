const path = require('path')
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js')
      }
    }
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  // emotionのbabel-preset-css-propを使えるようにしてる
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, '@emotion/babel-preset-css-prop'],
    plugins: ['react-require']
  }),
}