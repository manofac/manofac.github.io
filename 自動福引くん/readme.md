# ニコニ広告の福引自動化

ニコニ広告(nicoad.nicovideo.jp)にて毎日無料の福引を引くことができる。  
内容は週毎に変わる。  
ポイントなどがもらえて気に入った動画・放送に広告したりできるのでこの作業を自動化ないし、半自動化していくものである。

## 現在想定している使い方
* 作成したスクリプトをトリガーする(chromeプラグインのTampermonkey、スマホはfirefoxなど必要となりそう)
* ニコニコ動画 or ニコ生のページを表示した際に動く
* 一日に一度のみトライする
* リトライしたい場合、ブラウザを一度閉じる(もしくは直接手動で福引してしまってもよい)

## 利用方法
* PC版google chromeを用意する
* Tampermonkeyプラグインを入れる
* Tampermonkeyのダッシュボード→ユーティリティのURL→インポート、URLは以下２点
  * https://raw.githubusercontent.com/manofac/manofac.github.io/nikonama/%E8%87%AA%E5%8B%95%E7%A6%8F%E5%BC%95%E3%81%8F%E3%82%93/nico2-auto-fukubikiPage-opener.js
  * https://raw.githubusercontent.com/manofac/manofac.github.io/nikonama/%E8%87%AA%E5%8B%95%E7%A6%8F%E5%BC%95%E3%81%8F%E3%82%93/nico2-auto-fukubiki-clicker.js
* ※一応スクリプトの自動更新はされる、かも
* ニコニコ動画 or ニコ生のページを表示すると勝手に福引してくれるかも

## 現在発覚している問題
* キャンペーンのURLが週毎に変わるのでうまいこと抽出できないと、メンテナンスがクソ面倒くさい
* niconicoサービス内なのになぜかcross origin制約が課せられているので実装はスマートには行えないであろう
