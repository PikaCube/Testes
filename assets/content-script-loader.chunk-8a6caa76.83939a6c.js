(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-8a6caa76.js")
    );
  })().catch(console.error);

})();
