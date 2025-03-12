// ==UserScript==
// @name     Wikipedia to Wikiwand Redirect
// @version  1
// @match       *://*.wikipedia.org/wiki/*
// @homepage     https://github.com/Chillsmeit/Wikipedia-Wikiwand-Redirect
// @homepageURL  https://github.com/Chillsmeit/Wikipedia-Wikiwand-Redirect
// @source       github:Chillsmeit/Wikipedia-Wikiwand-Redirect
// @supportURL   https://github.com/Chillsmeit/Wikipedia-Wikiwand-Redirect/issues
// @downloadURL  https://raw.githack.com/Chillsmeit/Wikipedia-Wikiwand-Redirect/main/blob/Wikipedia-Wikiwand-Redirect.user.js
// @run-at       document-start
// ==/UserScript==

(function() {
    let match = location.hostname.match(/^([a-z-]+)\.wikipedia\.org$/);
    if (match) {
        let lang = match[1];
        let newUrl = location.href.replace(`${lang}.wikipedia.org/wiki`, `www.wikiwand.com/${lang}`);
        location.replace(newUrl);
    }
})();
