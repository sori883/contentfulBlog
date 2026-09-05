import type { PropsWithChildren } from "hono/jsx";

import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";

export function GeneralLayout({ children }: PropsWithChildren) {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content" className="site-main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
