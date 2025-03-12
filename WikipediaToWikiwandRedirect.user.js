// ==UserScript==
// @name     Wikipedia to Wikiwand Redirect
// @version  1
// @match        *://en.wikipedia.org/wiki/*
// @homepage     https://github.com/Chillsmeit/WikipediaToWikiwandRedirect
// @homepageURL  https://github.com/Chillsmeit/WikipediaToWikiwandRedirect
// @source       github:Chillsmeit/WikipediaToWikiwandRedirect
// @supportURL   https://github.com/Chillsmeit/WikipediaToWikiwandRedirect/issues
// @downloadURL  https://raw.githack.com/Chillsmeit/WikipediaToWikiwandRedirect/main/blob/WikipediaToWikiwandRedirect.user.js
// @run-at       document-start
// ==/UserScript==

(function() {
    let newUrl = location.href.replace("en.wikipedia.org/wiki", "www.wikiwand.com/en");
    location.replace(newUrl);
})();
