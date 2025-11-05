export function QiitaLink() {
  return (
    <div>
      <a
        href="https://qiita.com/sori883"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-theme hover:bg-theme-hover inline-flex items-center gap-2 rounded-lg px-4 py-2 transition-all"
      >
        <img src="/qiita-icon.png" alt="Qiita" className="h-6 w-6" />
        <span className="text-theme text-sm font-semibold">Qiita →</span>
      </a>
    </div>
  );
}
