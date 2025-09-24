# コードスタイルと規約

## TypeScript設定
- **Target**: ESNext
- **Module**: ESNext
- **Module Resolution**: Bundler
- **Strict Mode**: 有効
- **JSX**: react-jsx (hono/jsx使用)
- **Base URL**: プロジェクトルート
- **Path Mapping**: `@/*` → `./app/*`

## ESLint設定
- **Base**: ESLint推奨設定 + TypeScript推奨設定
- **React**: jsx-runtime設定 + react-hooks設定
- **Custom Rules**:
  - `@typescript-eslint/no-empty-object-type`: off
  - `@typescript-eslint/no-explicit-any`: warn
  - `quotes`: double quotes強制

## Prettier設定
- **Print Width**: 80文字
- **Tab Width**: 2スペース
- **Semicolon**: 必須
- **Quotes**: ダブルクォート
- **Trailing Comma**: ES5準拠
- **End of Line**: LF

## Import順序規則
1. React関連
2. Hono関連
3. HonoX関連
4. サードパーティライブラリ
5. 型定義
6. 内部モジュール（@/env, @/types, @/config, @/lib, @/hooks）
7. コンポーネント・スタイル・アプリ（@/components, @/styles, @/app）
8. 相対パス

## ファイル命名規約
- **コンポーネント**: PascalCase (`Counter.tsx`)
- **ルート**: kebab-case (`_404.tsx`, `_error.tsx`)
- **設定ファイル**: lowercase (`eslint.config.mjs`)

## コード品質ガイドライン
- TypeScriptの型安全性を最大限活用
- React Hooksの適切な使用
- ESLint/Prettierの自動修正を活用
- ダブルクォートを統一使用