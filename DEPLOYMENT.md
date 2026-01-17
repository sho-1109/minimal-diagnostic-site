# Netlifyへのデプロイ手順

このプロジェクトは、Netlifyを使用して簡単に無料で公開することができます。

## 手順

1.  **GitHubへプッシュ**
    まだGitHubにリポジトリを作成していない場合は、作成してこのコードをプッシュしてください。

2.  **Netlifyで新規サイト作成**
    - Netlifyにログイン（または新規登録）します。
    - "Add new site" > "Import an existing project" を選択します。
    - "GitHub" を選択し、リポジトリへのアクセスを許可します。
    - 先ほどプッシュしたリポジトリ（`minimal-diagnostic-site`など）を選択します。

3.  **設定の確認とデプロイ**
    - `netlify.toml` ファイルが含まれているため、設定は自動的に検出されます。
    - **Build command**: `npm run build`
    - **Publish directory**: `.next`
    - "Deploy site" ボタンをクリックします。

4.  **完了**
    - 数分でデプロイが完了し、公開URLが発行されます。

## 注意点
- **環境変数**: 特別な環境変数（APIキーなど）は使用していないため、追加の設定は不要です。
- **ドメイン**: 公開後、Netlifyの設定画面からカスタムドメインを設定することも可能です。
