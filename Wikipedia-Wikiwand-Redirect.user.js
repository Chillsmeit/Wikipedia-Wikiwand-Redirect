// ==UserScript==
// @name     Wikipedia to Wikiwand Redirect
// @version  1
// @match        *://en.wikipedia.org/wiki/*
// @homepage     https://github.com/Chillsmeit/Wikipedia-Wikiwand-Redirect
// @homepageURL  https://github.com/Chillsmeit/Wikipedia-Wikiwand-Redirect
// @source       github:Chillsmeit/Wikipedia-Wikiwand-Redirect
// @supportURL   https://github.com/Chillsmeit/Wikipedia-Wikiwand-Redirect/issues
// @downloadURL  https://raw.githack.com/Chillsmeit/Wikipedia-Wikiwand-Redirect/main/blob/Wikipedia-Wikiwand-Redirect.user.js
// @run-at       document-start
// ==/UserScript==

(function() {
    let newUrl = location.href.replace("en.wikipedia.org/wiki", "www.wikiwand.com/en");
    location.replace(newUrl);
})();
