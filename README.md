- React
- React Router v6
- Material UI/Icon
- Prettier

## git command

```
git add .
git commit -m "何か入れる"
git checkout -b ブランチ名
git push origin ブランチ名

最新版にする
git pull origin main

起動
yarn start
```

```
稲垣　チャート画面　Chart.jsx ブランチ名　ChildChart.jsx
鷲見　  子供用メインページ      ChildHome.jsx
        ポップアップ
筒井    履歴       ChildHistory.jsx
        会員ページ ChildCustomer.jsx

ログイン Login.jsx
新規会員登録 Signup.jsx


```

# ディレクトリ役割
page/ 遷移するページ
components/ 部品たち

# 機能一覧
## 子供
・所持ポイントの表示
・所持株の表示
・商品の購入
・株の売買
・株のグラフ表示
・アカウントの設定変更

## 親
・商品の追加、更新、削除
・子供のポイント変更
・子供アカウント追加
・子供アカウントと切り替え

 ## 使用技術
<p color="red" size="2rem">ここあんまわからんから書いてくれ</p>

# 使用手順
１．親と子のアカウントの作成を行う。
（子供が端末を持っていない場合は親のアカウント作成後ユーザページから子供アカウントの作成を行う。）
２．子供が親の手伝いなどを行って親からポイントを付与してもらう。
３．子供はポイントを使用して株の運用方法を学ぶ。（ポイントを増やす。）
４．増やしたポイントを使用して商品を購入し、親から商品を受け取る。