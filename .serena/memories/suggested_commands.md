# 推奨コマンド一覧

## 開発コマンド
```bash
# 開発サーバー起動
bun run dev

# プロダクションビルド
bun run build

# プレビュー（Wranglerでローカル実行）
bun run preview

# Cloudflare Workersにデプロイ
bun run deploy:worker

# プロジェクトクリーンアップ
bun run clean
```

## コード品質コマンド
```bash
# ESLintでリント実行
bun run lint

# Prettierでフォーマット実行
bun run format:fix

# Prettierでフォーマットチェック
bun run format
```

## システムユーティリティ（macOS/Darwin）
```bash
# ファイル・ディレクトリ操作
ls -la          # ファイル一覧（詳細）
find . -name    # ファイル検索
grep -r         # テキスト検索
cat             # ファイル内容表示
head/tail       # ファイルの先頭/末尾表示

# Git操作
git status      # ステータス確認
git add .       # 全変更をステージング
git commit -m   # コミット
git push        # プッシュ
git pull        # プル

# パッケージ管理
bun install    # 依存関係インストール
bun add        # パッケージ追加
bun remove     # パッケージ削除
```

## よく使用するVite/Wranglerコマンド
```bash
# Vite開発サーバー
vite           # 開発サーバー起動
vite build     # プロダクションビルド

# Wrangler
wrangler dev   # ローカル開発環境
wrangler deploy # デプロイ実行
wrangler tail  # ログ監視
```