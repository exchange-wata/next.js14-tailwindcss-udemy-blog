## 概要

- udemyの講座をやってみたものです。
  - [【Next.js13】最新バージョンのNext.js13をマイクロブログ構築しながら基礎と本質を学ぶ講座](https://www.udemy.com/share/109CcM3@rc9scMKgTllcXIHcM6iizpKeoTFPDJ7WPpbJx-9NLd6antoqjjHKKWsFovJPrw6f6A==/)
- latestを入れたら14系になってたので14系で受講を進めました。

## 技術

- Next.js(14系)
- Tailwind CSS

## 開始方法

※ Nextのプロジェクト作成までは動画内容と同じです。

※ 以下はターミナルで実行します。

- Next.jsを立ち上げる

  ```bash
  npm run dev
  ```

- json-serverを立ち上げる

  - NextのAPIではなくローカルデータにアクセスするときに使いました。
  - supabaseへアクセスする段階後は基本的に使いません。

  ```
  yarn json-server
  ```

※ ブラウザはこちら→ [http://localhost:3000](http://localhost:3000)

## 受講内容と異なる実装をしたところ

- app/api配下のディレクトリ構成
- .envにDB情報の追加
- 各ページのcomponentの構成
  - フロントエンドに詳しい訳ではないので良い構成かはちょっと自信ないです。
- その他細かい所は割愛

## できたらやりたかったこと

- supabaseをdocker containerで実装する

## 有識者に聞きたいこと

- app/api/articleの配下のディレクトリ構成でAPIを作るべきか
  - app/api/article/[uuid]/route.tsにHTTP METHODを全て入れ切ってしまうか

## 注意事項

- 環境変数がgithub上にないので、こちらのリポジトリを手元に持ってきてもブラウザで開けない可能性があります。
