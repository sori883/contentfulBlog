import type { PropsWithChildren } from "hono/jsx";

import { Footer } from "~/components/elements/footer";
import { Header } from "~/components/elements/header";

export function GeneralLayout({ children }: PropsWithChildren) {
  return (
    <main className="bg-base flex min-h-screen flex-col text-white">
      <Header />
      <div className="container mx-auto flex-1 px-0">
        <div className="max-w-8xl mx-auto px-0 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
}
