import { ToggleTheme } from "@/components/theme/$toggleTheme";

const navigation = [
  { name: "X.com", href: "https://x.com/sori883" },
  { name: "Zenn", href: "https://zenn.dev/sorinaji" },
  { name: "GitHub", href: "https://github.com/sori883" },
];

export function Header() {
  return (
    <div>
      <header className="relative">
        <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 pb-10 sm:px-0 sm:pb-0">
            <div className="flex h-16 items-center justify-between">
              <div className="flex flex-1">
                <a href="/" className="flex items-center">
                  <h1 className="text-theme text-2xl font-bold">
                    今日も生きてるだけでえらい
                  </h1>
                </a>
              </div>

              <div className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                <div className="flex h-14 space-x-4 overflow-x-auto px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:pb-0">
                  <div className="flex items-center">
                    <ToggleTheme />
                  </div>
                  {navigation.map((item) => (
                    <div key={item.name} className="flex items-center">
                      <a
                        href={item.href}
                        className="text-theme rounded-full px-3 py-2 text-sm font-medium"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
