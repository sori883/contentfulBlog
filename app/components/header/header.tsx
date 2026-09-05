export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>
      <a className="wordmark" href="/" aria-label="sori883.dev ホーム">
        sori883.dev<span>✳</span>
      </a>
      <nav className="site-nav" aria-label="メインナビゲーション">
        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/activities">ACTIVITIES</a>
        <a href="/blog">BLOG</a>
        <a href="/likes">LIKES</a>
      </nav>
    </header>
  );
}
