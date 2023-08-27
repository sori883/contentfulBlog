export const pagesPath = {
  _page: (page: string | number) => ({
    $url: (url?: { hash?: string }) => ({ pathname: '/[page]' as const, query: { page }, hash: url?.hash })
  }),
  "itsme": {
    $url: (url?: { hash?: string }) => ({ pathname: '/itsme' as const, hash: url?.hash })
  },
  "posts": {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/posts/[slug]' as const, query: { slug }, hash: url?.hash })
    })
  },
  "privacypolicy": {
    $url: (url?: { hash?: string }) => ({ pathname: '/privacypolicy' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
