// ==UserScript==
// @name         SNR团队官方网站 背景替换脚本
// @namespace    https://snrstudio.github.io/
// @version      1.0.0
// @description  用来替换SNR官方网站的背景
// @author       还给我六个币
// @match        https://snrstudio.github.io/*
// @icon         none
// @grant        GM_addStyle
// @license      CC0
// ==/UserScript==
(function() {
    'use strict';

    GM_addStyle(`
        body {
            background: url(../images/background2.png) fixed center;
            background-size: cover;
        }
    `)
})();