// ==UserScript==
// @name         nico2-auto-fukubikiPage-opener
// @namespace    https://manofac.github.io/
// @version      0.1
// @description  現状、ニコ動・ニコ生のページを開いた際に掲題の通り。リトライはブラウザを閉じれば行える。
// @author       manofac
// @match        https://www.nicovideo.jp/*
// @match        http://live.nicovideo.jp/*
// ==/UserScript==

(async() => {
    'use strict';

    var d = new Date();
    var today = ('0' + (d.getMonth()+1)).slice(-2) + ('0' + (d.getDate())).slice(-2);
    if (sessionStorage.getItem('fukubikiDate') >= today) return;

    const target = 'https://blog.nicovideo.jp/niconews/118069.html';
    const wait = ( /** @type {number} */ second) => new Promise((resolve) => setTimeout(() => resolve(), second * 1000));
    await wait(0.7);

    if (!location.href.includes(target) || window.opener != target) {
        window.open(target, '_blank', 'menubar=0,width=300,height=200,top=100,left=100');
        sessionStorage.setItem('fukubikiDate', today);
    }
})();
// TODO: ソースうんこすぎる
// TODO: 小画面にフォーカスしちゃうのがダサい
// TODO: 福引ページの指定を外部化・自動化(毎週しかも変わったタイミングで更新しないといけないのでつらいが、URLの解析は無理くさい？)
// TODO: cross origin制約(www.nicovideo⇔blog.nicovideo.jp)に引っかかる(だいたいこいつのせい)ので福引成否結果直接は渡せないorz