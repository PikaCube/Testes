const o=o=>(...r)=>new Promise(((e,a)=>{o(...r,(o=>chrome&&chrome.runtime&&chrome.runtime.lastError?a(chrome.runtime.lastError):e(o)))}));var r={tabs:{query:chrome.tabs&&o(chrome.tabs.query),highlight:chrome.tabs&&o(chrome.tabs.highlight),reload:chrome.tabs&&o(chrome.tabs.reload)},downloads:{download:chrome.downloads&&o(chrome.downloads.download)}};export{r as c};
