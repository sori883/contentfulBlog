export const headingAnchor = {
  heading(text: string, level: number, _raw: string) {
    // headingにidを付与
    return `<h${level} id=${text}>${text}</h${level}>`;
  }
};