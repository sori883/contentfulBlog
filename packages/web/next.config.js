/** @type {import('next').NextConfig} */

const nextConfig =  {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  serverRuntimeConfig: {
    CONTENTFUL_GRAPHQL_ENDPOINT: process.env.CONTENTFUL_GRAPHQL_ENDPOINT,
    GCS_URL: process.env.GCS_URL,
  },
  publicRuntimeConfig: {
    APP_ROOT_URL: process.env.APP_ROOT_URL, 
    OGP_URL: process.env.OGP_URL, 
    BLOG_TITLE: process.env.BLOG_TITLE,
    GCS_URL: process.env.GCS_URL,
    TWITTER_ID: process.env.TWITTER_ID,
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
          },
        },
      ],
    });
    return config;
  },
  images: {
    domains: ['img.sori883.dev'],
    disableStaticImages: true,
  },
  compiler: {
    emotion: true
  }
};

const buildConfig = _phase => {
  const plugins = [];
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig
  });
  return config;
};


module.exports = buildConfig();