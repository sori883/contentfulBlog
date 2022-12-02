import NextHeadSeo from 'next-head-seo';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

export type MyPageSeoProps = {
  path?: string;
  title?: string;
  description?: string;
  ogImagePath?: string;
  noindex?: boolean;
  noTitleTemplate?: boolean;
};

export const SiteHead: React.FC<MyPageSeoProps> = (props) => {
  const { publicRuntimeConfig } = getConfig();
  const router = useRouter();

  const APP_ROOT_URL = publicRuntimeConfig.APP_ROOT_URL;
  const BLOG_TITLE = publicRuntimeConfig.BLOG_TITLE;

  const {
    path = router.pathname,
    title = BLOG_TITLE,
    description = 'ブログです！！！！',
    ogImagePath = '/default-og.png',
    noindex = false,
    noTitleTemplate = true,
  } = props;

  // Absolute page url
  const pageUrl = APP_ROOT_URL + path;
  // Absolute og image url
  const ogImageUrl = APP_ROOT_URL + ogImagePath;

  return (
    <NextHeadSeo
      title={noTitleTemplate ? title : `${title} - ${BLOG_TITLE}`}
      canonical={pageUrl}
      description={description}
      robots={noindex ? 'noindex, nofollow' : undefined}
      og={{
        title,
        description,
        url: pageUrl,
        image: ogImageUrl,
        type: 'article',
        siteName: BLOG_TITLE,
      }}
      twitter={{
        card: 'summary_large_image',
      }}
    />
  );
};