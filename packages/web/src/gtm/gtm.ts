import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const googleTagManagerId = publicRuntimeConfig.GOOGLE_TAG_MANAGER_ID;

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}