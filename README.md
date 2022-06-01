# 楽天ランキング表示 APP

[楽天商品ランキング API](https://webservice.rakuten.co.jp/documentation/ichiba-item-ranking)の結果を表示するだけのアプリです。
30 位まで表示されます。

## 使用したもの

### フロントエンド

- React (create-react-app)
- TypeScript
- aos (スクロールすると要素が fade up してくるアニメーション)

### バックエンド

- Node.js
- Express.js
- dotenv
- node-fetch
- swagger 　ほか

楽天 API はバックエンド側で node-fetch を使って、fetch しています。
