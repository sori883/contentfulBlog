import { createRoute } from "honox/factory";
import { parseTwemoji } from "@/libs/twemoji";

import { GeneralLayout } from "@/components/layouts/generalLayout";

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
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Zenn",
    href: "https://zenn.dev/sorinaji",
    icon: <img src="/zenn-logo.svg" alt="Zenn" className="h-5 w-5" />,
  },
  {
    name: "Qiita",
    href: "https://qiita.com/sori883",
    icon: <img src="/qiita-icon.png" alt="Qiita" className="h-5 w-5" />,
  },
  {
    name: "sori883.dev",
    href: "https://sori883.dev",
    icon: (
      <img
        src="/sori883-icon.webp"
        alt="sori883.dev"
        className="h-5 w-5 rounded-full"
      />
    ),
  },
];

export default createRoute((c) => {
  return c.render(
    <GeneralLayout>
      <div className="mb-8 text-center">
        <div className="mb-8 px-1">
          <h1 className="text-theme text-4xl">About Me</h1>
          <span className="inline-block text-gray-500 dark:text-gray-400">
            私について
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr]">
          {/* 左カラム */}
          <div className="space-y-6">
            <div className="bg-theme rounded-xl p-6 shadow-lg">
              <div className="mb-12 flex flex-col items-center">
                <img
                  src="/me.webp"
                  alt="Profile"
                  className="h-48 w-48 rounded-full object-cover ring-4 ring-gray-200 dark:ring-gray-700"
                  width="192"
                  height="192"
                />
              </div>
              <div>
                <h2 className="text-theme text-2xl font-bold">
                  sorinaji@sori883
                </h2>
                <ul className="text-theme text-md">
                  <li className="py-0.5">伊藤 健治(Kenji Ito)</li>
                  <li className="py-0.5">岩手出身/仙台在住</li>
                  <li className="py-0.5">1998.05.18生</li>
                </ul>
              </div>
              <div className="mt-6 space-y-2">
                <h2 className="text-theme mt-6 text-lg font-bold">所属</h2>
                <p className="text-theme text-md">
                  2025.10.1〜
                  <br />
                  エーピーコミュニケーションズ
                  <br />
                  <a
                    href="https://www.ap-com.co.jp/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-md text-blue-500 hover:underline"
                  >
                    https://www.ap-com.co.jp/
                  </a>
                </p>
                <p className="text-theme text-md">
                  2025.10.1〜
                  <br />
                  放送大学
                  <br />
                  教養学部教養学科 情報コース
                  <br />
                  <a
                    href="https://www.ouj.ac.jp/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-md text-blue-500 hover:underline"
                  >
                    https://www.ouj.ac.jp/
                  </a>
                </p>
              </div>

              <div className="mt-6 space-y-2">
                <h2 className="text-theme mt-6 text-lg font-bold">SNS/Link</h2>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-theme text-md flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
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
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  こんにちは！プロフィールを閲覧いただきありがとうございます！
                  <br />
                  インフラとアプリをやってます！こんな風貌ですm_ _m
                  <br />
                  <br />
                  <img
                    src="real-me.webp"
                    alt="APC入社時の写真"
                    className="w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                  <span className="text-sm">※APC入社時</span>
                </p>
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
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <h3 className="text-theme mb-2 text-lg font-semibold">
                  AWS、Google、OCI
                </h3>
                <p>
                  <a
                    href="https://www.credly.com/users/sori883"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Credlyデジタルバッジ
                  </a>
                </p>
                <h3 className="text-theme mb-2 text-lg font-semibold">
                  マイクロソフト認定
                </h3>
                <p>
                  <a
                    href="https://learn.microsoft.com/api/credentials/share/ja-jp/sori883/9BDF980EEB12A2C2?sharingId=A95A292AC2761537"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    マイクロソフト認定: Azure管理者アソシエイト（AZ-104）
                  </a>
                </p>
                <p>
                  <a
                    href="https://learn.microsoft.com/api/credentials/share/ja-jp/sori883/ED8B774EE24C3AD2?sharingId=A95A292AC2761537"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    マイクロソフト認定: Azure ソリューション アーキテクト
                    エキスパート（AZ-304）
                  </a>
                </p>
                <h3 className="text-theme mb-2 text-lg font-semibold">
                  IPA
                </h3>
                <p>
                  <a
                    href="https://x.com/sori883/status/2004026396566528321"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    情報処理安全確保支援士試験 合格
                  </a>
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
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p className="mb-4">昼飲みからの炭水化物は幸福の極み</p>
                <div className="grid grid-cols-2 gap-2">
                  <img
                    src="/like/osake1.webp"
                    alt="お酒"
                    className="h-40 w-full rounded-lg object-cover"
                    loading="lazy"
                    width="300"
                    height="160"
                  />
                  <img
                    src="/like/ramen1.webp"
                    alt="ラーメン"
                    className="h-40 w-full rounded-lg object-cover"
                    loading="lazy"
                    width="300"
                    height="160"
                  />
                  <img
                    src="/like/tukemen1.webp"
                    alt="つけ麺"
                    className="h-40 w-full rounded-lg object-cover"
                    loading="lazy"
                    width="300"
                    height="160"
                  />
                  <img
                    src="/like/tukemen2.webp"
                    alt="つけ麺"
                    className="h-40 w-full rounded-lg object-cover"
                    loading="lazy"
                    width="300"
                    height="160"
                  />
                  <img
                    src="/like/oburasoba1.webp"
                    alt="おぶらそば"
                    className="h-40 w-full rounded-lg object-cover"
                    loading="lazy"
                    width="300"
                    height="160"
                  />
                  <img
                    src="/like/taimwanmezesoba1.webp"
                    alt="台湾まぜそば"
                    className="h-40 w-full rounded-lg object-cover"
                    loading="lazy"
                    width="300"
                    height="160"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </GeneralLayout>
  );
});
