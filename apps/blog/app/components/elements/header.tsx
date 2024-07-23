const navigation = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/" },
];

export function Header() {
  return (
    <div className="bg-base">
      <header className="relative bg-base">
        <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 pb-14 sm:px-0 sm:pb-0">
            <div className="flex h-16 items-center justify-between">

              {/* ロゴ */}
              <div className="flex flex-1 text-white">
                <a href="/">
                  <h1 className="font-bold text-lg">🦊KITUNE IS GOOD</h1>
                </a>
              </div>

              {/* ナビゲーション */}
              <div className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                <div className="flex h-14 space-x-8 overflow-x-auto px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:pb-0">
                  {navigation.map((item) => (
                    <div key={item.name} className="flex items-center">
                      <a
                        href={item.href}
                        className="text-sm font-medium text-white hover:bg-secondary px-3 py-2 rounded-full"
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