export const imageRender = {
  image(href: string, _title: string | null, text: string) {
    const imgSrc = encodeURIComponent(href)

    return process.env.NODE_ENV !== "development" ? 
    `<img loading="lazy" src="https://rsimg.cashless-life.com/simple?url=${imgSrc}" alt="${text}" loading="lazy" />`
    : 
    `<img loading="lazy" src="http://localhost:3110/simple?url=${imgSrc}" alt="${text}" loading="lazy" />`;
  }
};
