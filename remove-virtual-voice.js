// ==UserScript==
// @name         Audible Virtual Voice Remover
// @namespace    https://www.briansbookblog.com
// @version      1.0.0
// @description  Remove Virtual Voice from Audible.com's browsing pages.
// @author       Brian @ briansbookblog.com
// @match        https://www.audible.com/*
// @match        https://www.audible.co.uk/*
// @match        https://www.audible.ca/*
// @grant        none
// @license      GPL-3.0-or-later
// ==/UserScript==
 
(function() {
    'use strict';

    if (window.top !== window.self) {
        return;
    }

    const narratorFilterValue = '-virtual';

    function ensureNarratorFilter() {
        if (!window.location.pathname.includes('/search')) {
            return;
        }

        const url = new URL(window.location.href);
        const narratorParams = url.searchParams.getAll('narrator');
        const hasVirtualFilter = narratorParams.some((param) => {
            return param.split(',').map((value) => value.trim()).includes(narratorFilterValue);
        });

        if (!hasVirtualFilter) {
            url.searchParams.set('narrator', narratorFilterValue);
            window.location.replace(url.toString());
        }
    }

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
        originalPushState.apply(this, args);
        ensureNarratorFilter();
    };

    history.replaceState = function(...args) {
        originalReplaceState.apply(this, args);
        ensureNarratorFilter();
    };

    window.addEventListener('popstate', ensureNarratorFilter);

    ensureNarratorFilter();
})();
