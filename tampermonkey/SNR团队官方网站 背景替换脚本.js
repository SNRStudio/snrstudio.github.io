// ==UserScript==
// @name         SNR团队官方网站 暗色模式
// @namespace    https://snrstudio.github.io/
// @version      1.0.0
// @description  用来将SNR官方网站设为暗色模式
// @author       还给我六个币
// @match        https://snrstudio.github.io/*
// @icon         none
// @grant        GM_addStyle
// @license      CC0
// ==/UserScript==
(function() {
    'use strict';

    GM_addStyle(`
        .b-block {
            background-color: rgba(0, 0, 0, 0.7);
        }
        .b-card {
            background-color: rgba(0, 0, 0,0.7);
        }
        .b-section {
            background-color: rgba(0, 0, 0,0.7);
        }
        .b-navbar {
            background-color: rgba(0, 0, 0, 0.7);
        }
        p {
            color: #FFFFFF;
        }
        h1 {
            color: #FFFFFF;
        }
        h2 {
            color: #FFFFFF;
        }
        .t-info {
            color: #808080;
        }
        .t-author {
            color: #808080;
        }
        .t-navbartitle {
            color: #FFFFFF;
        }
        .t-navbarlink {
            color:rgba(255, 255, 255, 0.5);
        }
        .t-navbarlink:hover {
            color: #FFFFFF;
        }
    `)
})();