import { ToggleTheme } from "@/components/theme/$toggleTheme";

const navigation = [
  {
    name: "About",
    href: "/about",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    name: "X.com",
    href: "https://x.com/sori883",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/sori883",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
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
 
              <div className="hidden md:flex md:items-center md:space-x-4">
                <ToggleTheme />
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-theme flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="md:hidden">
                <details className="relative group">
                  <summary className="text-theme flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg transition-all hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950/50 dark:hover:to-purple-950/50">
                    <div className="relative h-5 w-5">
                      <span className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 group-open:translate-y-2 group-open:rotate-45"></span>
                      <span className="absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition-all duration-300 group-open:opacity-0"></span>
                      <span className="absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition-all duration-300 group-open:-translate-y-2 group-open:-rotate-45"></span>
                    </div>
                  </summary>
                  <div className="absolute right-0 top-12 z-50 min-w-[200px] animate-in fade-in slide-in-from-top-2 rounded-xl border border-gray-200 bg-white/95 shadow-xl backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/95">
                    <div className="flex flex-col gap-1 p-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-theme group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950/50 dark:hover:to-purple-950/50"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50">
                            {item.icon}
                          </span>
                          <span className="flex-1">{item.name}</span>
                          {item.href.startsWith("http") && (
                            <svg className="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                        </a>
                      ))}
                      <div className="mt-1 flex items-center justify-center border-t border-gray-200 py-3 dark:border-gray-700">
                        <ToggleTheme />
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
