/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require("next-transpile-modules")(['react-syntax-highlighter']);

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
    BLOG_TITLE: process.env.BLOG_TITLE,
    CONTENTFUL_GRAPHQL_ENDPOINT: process.env.CONTENTFUL_GRAPHQL_ENDPOINT,
    GCS_URL: process.env.GCS_URL,
    TWITTER_ID: process.env.TWITTER_ID,
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID
  },
  images: {
    domains: ['img.sori883.dev'],
  },
  compiler: {
    emotion: true
  }
};

const buildConfig = _phase => {
  const plugins = [withTM];
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig
  });
  return config;
};


module.exports = buildConfig();