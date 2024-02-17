// ==UserScript==
// @name         Audible Virtual Voice Modifier
// @namespace    https://www.briansbookblog.com
// @version      0.33
// @description  Remove Virtual Voice from Audible.com's browsing pages.
// @author       Brian @ briansbookblog.com
// @match        https://www.audible.com/*
// @match        https://www.audible.co.uk/*
// @match        https://www.audible.ca/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const checkboxId = 'enableCheckbox';

    function modifyURL() {
        const checkbox = document.getElementById(checkboxId);

        if (checkbox) {
            const currentUrl = window.location.href;

           if (currentUrl.includes("&keywords=-virtual_voice")) {
               checkbox.checked = true;
            } else {
                checkbox.checked = false;
            }

            if (checkbox.checked && !currentUrl.includes("/pd/")) {
                const modifiedUrl = currentUrl + "&keywords=-virtual_voice";
                window.location.href = modifiedUrl;
            }
        }
    }

    function addCheckbox() {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = checkboxId;
        checkbox.style.marginRight = '5px';

        const label = document.createElement('label');
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(' Remove Virtual Voice'));

        label.addEventListener('change', modifyURL);

        // Insert the heading with the ID 'a-virtualvoice' and inherit padding/style
        const heading = document.createElement('h2');
        heading.id = 'a-virtualvoice';
        heading.className = 'bc-text bc-pub-relative bc-accordion-header-text bc-size-base bc-text-bold bc-box bc-box-padding-mini bc-accordion-header-inner bc-accordion-header-content';
        heading.appendChild(document.createTextNode('Virtual Voice'));


        // Insert the heading, checkbox, and label at the very top of #left-1 > form > section > div.bc-accordion.bc-color-border-base.bc-accordion-borderless.bc-accordion-icon-position-
        const parentElement = document.querySelector('#left-1 > form > section > div.bc-accordion.bc-color-border-base.bc-accordion-borderless.bc-accordion-icon-position-');
        if (parentElement) {
            parentElement.insertBefore(label, parentElement.firstChild);
            parentElement.insertBefore(heading, parentElement.firstChild);
}

    }

    addCheckbox();
})();