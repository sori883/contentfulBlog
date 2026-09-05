import type { PropsWithChildren } from "hono/jsx";

export function GeneralLayout({ children }: PropsWithChildren) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>
      <main id="main-content" className="site-main">
        {children}
      </main>
    </div>
  );
}
