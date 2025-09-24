# 技術スタック詳細

## Core Framework
- **Hono**: 軽量で高速なWebフレームワーク
- **HonoX**: HonoのフルスタックWeb拡張
- **Cloudflare Workers**: エッジコンピューティング環境での実行

## Frontend
- **React**: UIライブラリ（Hono/JSX経由）
- **Islands Architecture**: クライアントサイドコンポーネントは`app/islands/`に配置
- **Tailwind CSS v4**: ユーティリティファーストCSSフレームワーク

## Development Tools
- **Vite**: 高速ビルドツール・開発サーバー
- **TypeScript**: 型安全なJavaScript拡張
- **Wrangler**: Cloudflare Workers用CLIツール

## Code Quality Tools
- **ESLint**: JavaScript/TypeScriptリンター
- **Prettier**: コードフォーマッター
- **typescript-eslint**: TypeScript用ESLintプラグイン

## Package Management
- **pnpm**: 効率的なパッケージマネージャー

## Deployment
- **Cloudflare Workers**: エッジでの実行
- **Wrangler**: デプロイメント管理
- **Static Assets**: `dist/`ディレクトリから配信