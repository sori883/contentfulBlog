export function ZennLink() {
  return (
    <div>
      <a
        href="https://zenn.dev/sorinaji"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-lg gap-2 px-4 py-2 transition-all bg-theme hover:bg-theme-hover"
      >
        <img src="/zenn-logo.svg" alt="Zenn" className="h-6 w-6" />
        <span className="text-theme text-sm font-semibold">Zenn →</span>
      </a>
    </div>
  );
}
