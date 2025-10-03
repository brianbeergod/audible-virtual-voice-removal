# Audible Virtual Voice Modifier

This userscript removes "Virtual Voice" AI-Generated audiobooks from Audible.com's browsing pages by automatically appending the narrator filter `-virtual` to Audible search URLs.

I've tested this on the US site, but it is currently set up to work with the UK and Canadian URLs as well, nothing should change with those, but any extra testing would be greatly appreciated.

## Installation

To use this script, you'll need a userscript extension such as Tampermonkey or Greasemonkey installed in your browser.

1. Install a userscript extension for your browser:
   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Edge, Safari, Opera)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)

2. Click on the "Install" button below to install the script:

   [Install Audible Virtual Voice Modifier](https://greasyfork.org/en/scripts/487538-audible-virtual-voice-remover)

3. **Update October 2025:** I currently cannot log back into my GreasyFork account to upload new versions. If the hosted script is out of date, you can manually update it from this repository:
   - Option A: Open `remove-virtual-voice.js`, copy the entire contents, and paste them into a new or existing userscript in your manager (Tampermonkey, Greasemonkey, etc.), then save.
   - Option B: Create a new local userscript file in your manager and paste in the contents of `remove-virtual-voice.js` so the script updates immediately.
   I will restore GreasyFork updates if I regain account access.

4. Once the extension is installed (or manually updated) and the script is enabled, visit Audible.com and any search results will automatically exclude Virtual Voice audiobooks. To see Virtual Voice titles again, temporarily disable the script in your userscript manager.

## How it Works

The script monitors Audible's search pages and ensures that the narrator filter `-virtual` is present in the URL. Whenever the filter is missing (for example, when navigating to a new search page), the script updates the URL to add `&narrator=-virtual`, which removes "Virtual Voice" results.

Please note that this script is intended for personal use and may not work as expected on all pages or under all circumstances. Use at your own risk.
