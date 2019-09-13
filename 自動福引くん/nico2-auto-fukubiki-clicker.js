// ==UserScript==
// @name         nico2-auto-fukubiki-clicker
// @namespace    https://manofac.github.io/
// @version      0.1
// @description  福引ページにて「福引をまわす！」ボタンを自動クリックしてくれる
// @author       manofac
// @match        https://blog.nicovideo.jp/niconews/118069.html
// ==/UserScript==

(async() => {
    'use strict';

    // 一応自分で遷移してきた場合は手動で引くこととする
    if(!window.opener) return;

    var d = new Date();
    var today = ('0' + (d.getMonth()+1)).slice(-2) + ('0' + (d.getDate())).slice(-2);
    if (sessionStorage.getItem('fukubikiDate') >= today) return;

    const wait = ( /** @type {number} */ second) => new Promise((resolve) => setTimeout(() => resolve(), second * 1000));
    await wait(0.7);
    const button = /** @type {HTMLElement} */ (document.querySelector('.accent-button.start-button'));
    if (button) {
        button.click();
        await wait(1.7);
        sessionStorage.setItem('fukubikiDate', today);
    }
    window.close();
})();
// TODO: ミスった、こっちだhttps://nicoad.nicovideo.jp/campaign/free_double_201909 うーんどうにかこのキャンペーンのURL抽出できないかな…
// TODO: ソースうんこすぎる
// TODO: 福引ページの指定を外部化・自動化(毎週しかも変わったタイミングで更新しないといけないのでつらいが、URLの解析は無理くさい？)
// TODO: cross origin制約(www.nicovideo⇔blog.nicovideo.jp)に引っかかるので福引成否結果直接は渡せないorz
