# プロジェクト概要

## プロジェクトの目的
このプロジェクトは **HonoX** を使用したWebアプリケーションです。Honoは軽量で高速なWebフレームワークで、HonoXはそのフルスタック拡張版です。

## 技術スタック
- **フレームワーク**: Hono + HonoX
- **ランタイム**: Cloudflare Workers
- **言語**: TypeScript
- **UI**: React (Hono/JSX使用)
- **スタイリング**: Tailwind CSS v4
- **ビルドツール**: Vite
- **パッケージマネージャー**: pnpm
- **デプロイ**: Cloudflare Workers (Wranglerを使用)

## プロジェクト構造
```
contentfulBlog/
├── app/                     # アプリケーションソース
│   ├── client.ts           # クライアントサイドエントリーポイント
│   ├── server.ts           # サーバーサイドエントリーポイント
│   ├── style.css           # グローバルスタイル
│   ├── global.d.ts         # 型定義
│   ├── islands/            # クライアントサイドコンポーネント
│   │   └── counter.tsx
│   └── routes/             # ページルート
│       ├── index.tsx       # ホームページ
│       ├── _renderer.tsx   # ページレンダラー
│       ├── _error.tsx      # エラーページ
│       └── _404.tsx        # 404ページ
├── public/                 # 静的ファイル
│   └── favicon.ico
├── dist/                   # ビルド出力先
└── 設定ファイル群
```

## 開発環境
- **OS**: macOS (Darwin)
- **Node.js**: 最新版推奨
- **パッケージマネージャー**: pnpm