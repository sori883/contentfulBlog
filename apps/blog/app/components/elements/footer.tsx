const navigation = {
  main: [
    { name: "プライバシーポリシー", href: "/privacypolicy/" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-base">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-3">
        <nav aria-label="Footer" className="-mb-6 text-center sm:space-x-12">
          {navigation.main.map((item) => (
            <div key={item.name}>
              <a href={item.href} className="text-sm text-white hover:text-gray-400">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-5 text-center text-xs leading-5  text-white">
          &copy; KITUNE IS GOOD 2022 .
        </p>
      </div>
    </footer>
  );
}