## このディレクトリについて

testDataとありますが、UTなどを行うものではありません。ローカルのjsonデータを取得するためのものです。

## 手順

ルートディレクトリにて、

```
npm run json-server
```

を実行してください。

## 詳細

ルートファイルやディレクトリの中にpackage.jsonがあります。

```
"json-server": "json-server --watch app/testData/posts.json --port 3001"
```

こちらが上記コマンドで動いている中身です。

## アクセス方法

上記コマンドを実行したら任意のブラウザにて

```
http://localhost:3001/posts
```

へアクアセスしてください。本READMEと同列にあります、posts.jsonの中身が表示されます。

## 備考

記事の新規作成や削除などCRUD的処理をこのjson-serverに繋がるようにしたままにすると、posts.jsonが影響を受けます。
