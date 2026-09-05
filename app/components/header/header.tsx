import { ToggleTheme } from "@/components/theme/$toggleTheme";

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>
      <a className="wordmark" href="/" aria-label="sori883 ホーム">
        sori883<span>✳</span>
      </a>
      <nav className="site-nav" aria-label="メインナビゲーション">
        <a href="/about">ABOUT</a>
        <a href="/#activities">ACTIVITIES</a>
        <a href="/blog">BLOG</a>
        <a href="https://github.com/sori883" target="_blank" rel="noreferrer">
          GITHUB ↗
        </a>
      </nav>
      <div className="theme-control">
        <ToggleTheme />
      </div>
    </header>
  );
}
