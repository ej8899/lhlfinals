//
// LearnThis! Resource Web Clipper
//

// process submit
function getCurrentTabUrl() {
  let queryInfo = {
    active: true,
    currentWindow: true,
  }

  // grab resource category
  let select = document.getElementById("options");
  let selectedOption = select.options[select.selectedIndex].value;

  // grab any supplied note information
  let note = document.getElementById("note");
  let noteText = note.value;

  // grab any supplied page title information
  let pageTitle = document.getElementById("page-title");
  let pageTitleText = pageTitle.value;

  // grab resource url from current tab
  chrome.tabs.query(queryInfo, function(tabs) {
    let tab = tabs[0];
    alert(tab.url + " - category - " + selectedOption + " - notes - " + noteText + " - page title - " + pageTitleText);
  })
}


// call chrome tabs API
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  let currentTab = tabs[0];
  //alert("The title of the current tab is: " + currentTab.title);
  
  // set the default resource title to current page title
  document.getElementById("page-title").value = currentTab.title;
});

// listen form form submission
document.querySelector('#get-url').addEventListener('click', getCurrentTabUrl);

// listen for close button
let closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
  window.close();
});

