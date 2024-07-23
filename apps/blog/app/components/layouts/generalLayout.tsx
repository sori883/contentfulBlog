import type { PropsWithChildren } from "hono/jsx";
import { Header } from "~/components/elements/header";
import { Footer } from "~/components/elements/footer";

export function GeneralLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex flex-col min-h-screen bg-base text-white">
      <Header />
      <div className="flex-1 container mx-auto px-0">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          { children }
        </div>
      </div>
      <Footer />
    </main>
  );
}