# Audible Virtual Voice Modifier

This userscript removes "Virtual Voice" AI-Generated audiobooks from Audible.com's browsing pages by adding a checkbox to toggle the removal of the "Virtual Voice" keyword from the URL.

I've tested this on the US site, but it is currently set up to work with the UK and Canadian URLs as well, nothing should change with those, but any extra testing would be greatly appreciated.

## Installation

To use this script, you'll need a userscript extension such as Tampermonkey or Greasemonkey installed in your browser.

1. Install a userscript extension for your browser:
   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Edge, Safari, Opera)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)

2. Click on the "Install" button below to install the script:

   [Install Audible Virtual Voice Modifier](https://greasyfork.org/en/scripts/487538-audible-virtual-voice-remover)

3. Once the extension is installed and the script is enabled, visit Audible.com and you should see a checkbox labeled "Remove Virtual Voice". Checking this box will remove the "Virtual Voice" from the results, updating the page content accordingly.

## How it Works

The script adds a checkbox to the Audible.com page that allows you to toggle the removal of the "Virtual Voice" keyword from the URL. When the checkbox is checked, the script appends `&keywords=-virtual_voice` to the URL, effectively removing "Virtual Voice" from the search results.
Currently, you cannot remove the check (and remove the results). I am working on an update for that now.

Please note that this script is intended for personal use and may not work as expected on all pages or under all circumstances. Use at your own risk.
