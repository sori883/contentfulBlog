export function SiteMenu({ current }: { current: "home" | "about" | "write" }) {
  return (
    <nav className="page-menu" aria-label="ページメニュー">
      {(
        [
          ["home", "/", "HOME"],
          ["about", "/about", "ABOUT"],
          ["write", "/write", "WRITE"],
        ] as const
      ).map(([key, href, label]) => (
        <a
          href={href}
          aria-current={current === key ? "page" : undefined}
          key={key}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
