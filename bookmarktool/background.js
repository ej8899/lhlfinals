chrome.action.onClicked.addListener(function(tab) {
  var tabUrl = tab.url;

  // Send the tab URL to your localhost server:
  // can do automatically here, or let it occur in popup after a secondary click to allow person to categorize it w a dropdown list first perhaps
  
// background.js



});


// background.js

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "open-link") {
    console.log("REQ URL:",request.url)
    chrome.tabs.create({ url: request.url, active: true });
  }
});

