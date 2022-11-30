import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const GCS_URL = serverRuntimeConfig.GCS_URL || publicRuntimeConfig.GCS_URL;

type LoaderProps = {
  src: string;
  width: number;
  quality?: number | undefined;
}

type BuilderProps = string;

export const imageLoader = ({ src, width, quality }: LoaderProps): string => `${GCS_URL}${src}?w=${width}&q=${quality || 75}`;

export const pathBuilder = ( src : BuilderProps): string =>  `${GCS_URL}${src}`;