# タスク完了時のチェックリスト

## コード品質チェック
タスク完了時は必ず以下のコマンドを実行してください：

### 1. リント実行
```bash
pnpm lint
```
- ESLintによる構文・スタイルチェック
- TypeScriptエラーの検出
- React Hooksの使用法チェック

### 2. フォーマット実行
```bash
pnpm format:write
```
- Prettierによるコード整形
- Import文の並び替え
- 統一されたスタイル適用

### 3. ビルドテスト
```bash
pnpm build
```
- プロダクション環境でのビルド確認
- TypeScript型エラーの検出
- 依存関係の問題確認

### 4. ローカル動作確認（オプション）
```bash
pnpm preview
```
- ビルド後のアプリケーション動作確認
- Cloudflare Workers環境での実行テスト

## 推奨ワークフロー
1. **コード変更**
2. **`pnpm lint`** でエラー修正
3. **`pnpm format:write`** で整形
4. **`pnpm build`** でビルド確認
5. **Git commit & push**

## 自動修正可能な問題
- Prettierで修正可能なフォーマット問題
- ESLintの`--fix`オプションで修正可能な問題

## 手動対応が必要な問題
- TypeScript型エラー
- React Hooksの依存配列問題
- 未使用変数/import文