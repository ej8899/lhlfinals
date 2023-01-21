chrome.action.onClicked.addListener(function(tab) {
  var tabUrl = tab.url;
  // Send the tab URL to your localhost server
  alert(tabUrl)
});