import { createRoute } from "honox/factory";

import { GeneralLayout } from "@/components/layouts/generalLayout";
import { parseTwemoji } from "@/libs/twemoji";

const socialLinks = [
  {
    name: "X.com",
    href: "https://x.com/sori883",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/sori883",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "Zenn",
    href: "https://zenn.dev/sorinaji",
    icon: (
      <img src="/zenn-logo.svg" alt="Zenn" className="h-5 w-5" />
    ),
  },
  {
    name: "Qiita",
    href: "https://qiita.com/sori883",
    icon: (
      <img src="/qiita-icon.png" alt="Qiita" className="h-5 w-5" />
    ),
  },
  {
    name: "sori883.dev",
    href: "https://sori883.dev",
    icon: (
      <img src="/sori883-icon.webp" alt="sori883.dev" className="h-5 w-5 rounded-full" />
    ),
  },
];

export default createRoute((c) => {
  return c.render(
    <GeneralLayout>
      <div className="mb-8 text-center">
        <div className="mb-8 px-1">
          <h1 className="text-theme text-4xl">About Me</h1>
          <span className="text-gray-500 dark:text-gray-400 inline-block">私について</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr]">
          {/* 左カラム */}
          <div className="space-y-6">
            <div className="bg-theme rounded-xl p-6 shadow-lg">
              <div className="flex flex-col items-center mb-12">
                <img
                  src="/me.webp"
                  alt="Profile"
                  className="h-48 w-48 rounded-full object-cover ring-4 ring-gray-200 dark:ring-gray-700"
                  width="192"
                  height="192"
                />
              </div>
              <div>
                <h2 className="text-theme text-2xl font-bold">sorinaji@sori883</h2>
                <ul className="text-theme text-sm">
                  <li className="py-0.5">伊藤 健治(Kenji Ito)</li>
                  <li className="py-0.5">岩手出身/仙台在住</li>
                  <li className="py-0.5">1998.05.18生</li>
                </ul>
              </div>
              <div className="mt-6 space-y-2">
                <h2 className="text-theme mt-6 text-lg font-bold">所属</h2>
                <p className="text-theme text-sm">エーピーコミュニケーションズ<br />
                <a href="https://www.ap-com.co.jp/" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">https://www.ap-com.co.jp/</a></p>
              </div>

              <div className="mt-6 space-y-2">
                <h2 className="text-theme mt-6 text-lg font-bold">SNS/Link</h2>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-theme flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 右カラム */}
          <div className="space-y-6">
            <div className="bg-theme rounded-xl p-6 shadow-lg">
              <h2 className="text-theme mb-4 flex items-center gap-2 text-2xl font-bold">
                <img
                  className="h-8 w-8"
                  src={parseTwemoji("👋")[0].url}
                  alt="手を振っているアイコン"
                />
                <span>自己紹介</span>
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-3">
                <p>
                  こんにちは！プロフィールを閲覧いただきありがとうございます！<br /><br />
                  
                  アプリ開発からクラウドインフラの世界へ。<br />
                  アプリケーション開発の経験を活かし、現在はクラウドインフラ領域で活動しています。<br />
                  開発者視点を持ったインフラエンジニアとして、お客様の課題解決に向けたソリューション提案から設計、構築までを一貫して手掛けています。<br /><br />

                  私の強みは、アプリケーションとインフラ両面から最適なアーキテクチャを提案できることです。<br />
                  新しい技術のキャッチアップを継続し、開発者にもお客様にも最適な環境を設計することを大切にしています。
                </p>
              </div>
            </div>

            <div className="bg-theme rounded-xl p-6 shadow-lg">
              <h2 className="text-theme mb-4 flex items-center gap-2 text-2xl font-bold">
                <img
                  className="h-8 w-8"
                  src={parseTwemoji("🥰")[0].url}
                  alt="ハートのアイコン"
                />
                <span>すきなこと</span>
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-3">
                <p className="mb-4">
                  昼飲みからのラーメン、つけ麺、油そばの王道コース
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <img src="/like/osake1.webp" alt="お酒" className="rounded-lg w-full h-40 object-cover" loading="lazy" width="300" height="160" />
                  <img src="/like/ramen1.webp" alt="ラーメン" className="rounded-lg w-full h-40 object-cover" loading="lazy" width="300" height="160" />
                  <img src="/like/tukemen1.webp" alt="つけ麺" className="rounded-lg w-full h-40 object-cover" loading="lazy" width="300" height="160" />
                  <img src="/like/tukemen2.webp" alt="つけ麺" className="rounded-lg w-full h-40 object-cover" loading="lazy" width="300" height="160" />
                  <img src="/like/oburasoba1.webp" alt="おぶらそば" className="rounded-lg w-full h-40 object-cover" loading="lazy" width="300" height="160" />
                  <img src="/like/taimwanmezesoba1.webp" alt="台湾まぜそば" className="rounded-lg w-full h-40 object-cover" loading="lazy" width="300" height="160" />
                </div>
              </div>
            </div>

            <div className="bg-theme rounded-xl p-6 shadow-lg">
              <h2 className="text-theme mb-4 flex items-center gap-2 text-2xl font-bold">
                <img
                  className="h-8 w-8"
                  src={parseTwemoji("💻")[0].url}
                  alt="PCのアイコン"
                />
                <span>スキル・経験</span>
              </h2>

              <div className="text-gray-700 dark:text-gray-300 space-y-6">
                <div>
                  <h3 className="text-theme text-lg font-semibold mb-2">インフラ・クラウド</h3>
                  <p className="text-theme text-xs mb-3">
                    オンプレミスサーバーの設計・構築・保守・運用の経験<br />
                    AWS Well-Architected Frameworkに基づくベストプラクティスに沿ったインフラ提案・設計・構築・運用
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-3 py-1 rounded-full text-sm">Linux</span>
                    <span className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-3 py-1 rounded-full text-sm">Windows Server</span>
                    <span className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-3 py-1 rounded-full text-sm">AWS</span>
                    <span className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-3 py-1 rounded-full text-sm">Cloudflare</span>
                    <span className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-3 py-1 rounded-full text-sm">AWS CDK</span>
                    <span className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-3 py-1 rounded-full text-sm">Terraform</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-theme text-lg font-semibold mb-2">言語</h3>
                  <p className="text-theme text-sm mb-3">様々な言語を使用した開発、改修を行った業務経験があります。</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">TypeScript</span>
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">PHP</span>
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">VBScript(Classic ASP)</span>
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Java</span>
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">C#</span>
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">VBA</span>
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">SQL</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-theme text-lg font-semibold mb-2">フロントエンド</h3>
                  <p className="text-theme text-xs mb-3">業務、個人で開発、改修を行った経験があります。</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full text-sm">jQuery</span>
                    <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Next.js</span>
                    <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full text-sm">React Router(Remix)</span>
                    <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full text-sm">HonoX</span>
                    <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Bootstrap</span>
                    <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-theme text-lg font-semibold mb-2">バックエンド</h3>
                  <p className="text-theme text-xs mb-3">業務、個人で開発、改修を行った経験があります。</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm">Express</span>
                    <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm">Hono</span>
                    <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm">Laravel</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-theme text-lg font-semibold mb-2">ツール</h3>
                  <p className="text-theme text-xs mb-3">開発で導入・利用したツール</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm">Eclipse</span>
                    <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm">VSCode</span>
                    <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm">Docker</span>
                    <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm">Git</span>
                    <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm">GitHub</span>
                    <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm">SVN</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-theme rounded-xl p-6 shadow-lg">
              <h2 className="text-theme mb-4 flex items-center gap-2 text-2xl font-bold">
                <img
                  className="h-8 w-8"
                  src={parseTwemoji("🏆")[0].url}
                  alt="トロフィーのアイコン"
                />
                <span>資格</span>
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-3">
                <p>
                  AWS認定資格をはじめ、色々な資格に挑戦中です！
                </p>
                <h3 className="text-theme text-lg font-semibold mb-2">
                  AWS、Google認定
                </h3>
                <p>
                  <a href="https://www.credly.com/users/sori883" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Credlyデジタルバッジ</a>
                </p>
                <h3 className="text-theme text-lg font-semibold mb-2">
                  マイクロソフト認定
                </h3>
                <p>
                  <a href="https://learn.microsoft.com/api/credentials/share/ja-jp/sori883/9BDF980EEB12A2C2?sharingId=A95A292AC2761537" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">マイクロソフト認定: Azure管理者アソシエイト（AZ-104）</a>
                </p>
                <p>
                  <a href="https://learn.microsoft.com/api/credentials/share/ja-jp/sori883/ED8B774EE24C3AD2?sharingId=A95A292AC2761537" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">マイクロソフト認定: Azure ソリューション アーキテクト エキスパート（AZ-304）</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </GeneralLayout>
  );
});
