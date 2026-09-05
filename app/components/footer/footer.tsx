export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <p>
          また、ふらっと
          <br />
          遊びにきてね。
        </p>
        <a href="/" className="footer-name">
          sori883<span>✳</span>
        </a>
      </div>
      <div className="footer-bottom">
        <small>© sori883.dev</small>
        <nav aria-label="フッター">
          <a href="/feed.xml">RSS ↗</a>
          <a href="/privacypolicy">プライバシーポリシー</a>
          <a href="#main-content">PAGE TOP ↑</a>
        </nav>
      </div>
    </footer>
  );
}
