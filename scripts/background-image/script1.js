// ==UserScript==
// @name         SNR团队官方网站背景替换脚本
// @namespace    https://huangeiwoliugebi.github.io/
// @version      1.0.0
// @description  用来替换SNR官方网站的背景
// @author       还给我六个币
// @match        https://huangeiwoliugebi.github.io/*
// @icon         none
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        body {
            background: url(../images/body-background-a.png) fixed center;
            background-size: cover;
        }
    `)
})();