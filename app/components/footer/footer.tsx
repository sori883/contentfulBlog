const navigation = {
  main: [{ name: "プライバシーポリシー", href: "/privacypolicy" }],
};

export function Footer() {
  return (
    <footer>
      <div className="text-theme mx-auto max-w-7xl overflow-hidden px-6 py-3">
        <nav aria-label="Footer" className="-mb-6 text-center sm:space-x-12">
          {navigation.main.map((item) => (
            <div key={item.name}>
              <a href={item.href} className="text-sm">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-5 text-center text-xs leading-5">&copy; sori883.dev</p>
      </div>
    </footer>
  );
}
