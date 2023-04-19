const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js')
      }
    },
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  staticDirs: ['../public'],
  framework: '@storybook/nextjs',
  core: {
    builder: "@storybook/builder-webpack5"
  },
  webpackFinal: (config) => {
    if (config.module?.rules) {
      config.module.rules = config.module.rules.map((rule) => {
        // HACK: Override SVG loader to not use file-loader
        if (rule !== '...' && rule.test?.toString().indexOf('svg') !== -1) {
          rule.exclude = /\.svg$/
        }
        return rule
      })

      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        issuer: /\.tsx$/,
      })
    }
    return config
  }
}