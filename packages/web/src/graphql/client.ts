import { ApolloClient, InMemoryCache } from '@apollo/client';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();
const CONTENTFUL_GRAPHQL_ENDPOINT = serverRuntimeConfig.CONTENTFUL_GRAPHQL_ENDPOINT;

export const client = new ApolloClient({
  uri: `${CONTENTFUL_GRAPHQL_ENDPOINT}`,
  credentials: 'same-origin',
  cache: new InMemoryCache(),
});