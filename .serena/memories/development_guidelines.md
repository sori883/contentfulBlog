# 開発ガイドライン

## アーキテクチャパターン

### Islands Architecture
- **Server-side**: 全ページは`app/routes/`でサーバーサイドレンダリング
- **Client-side**: インタラクティブコンポーネントは`app/islands/`に配置
- **Hydration**: 必要な部分のみクライアントサイドでハイドレーション

### ファイル配置規則
```
app/
├── routes/           # ページルート（SSR）
├── islands/          # クライアントサイドコンポーネント
├── client.ts         # クライアントエントリーポイント
├── server.ts         # サーバーエントリーポイント
└── style.css         # グローバルスタイル
```

## 開発パターン

### ルート作成
```typescript
import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(<div>Content</div>);
});
```

### インタラクティブコンポーネント
```typescript
import { useState } from "hono/jsx";

export default function ComponentName() {
  const [state, setState] = useState(initialValue);
  return <div>{/* JSX */}</div>;
}
```

### スタイリング
- **Tailwind CSS**: ユーティリティクラスを使用
- **@import**: CSSファイルでのモジュール読み込み
- **Source**: Tailwind v4の新しい`source()`関数を使用

## Cloudflare Workers特有の考慮事項
- **Edge Runtime**: Node.js APIは限定的
- **Cold Start**: 初回実行時の遅延を考慮
- **Memory Limits**: メモリ使用量に注意
- **CPU Time**: 実行時間制限に注意

## デバッグ・ログ
- **showRoutes**: 開発時のルート表示（server.ts）
- **Wrangler Tail**: デプロイ後のログ監視
- **Console**: ブラウザDevToolsでクライアントサイドデバッグ

## パフォーマンス最適化
- **Code Splitting**: Viteによる自動分割
- **Tree Shaking**: 未使用コードの除去
- **Minification**: 本番環境での圧縮
- **Edge Caching**: Cloudflareでの自動キャッシュ