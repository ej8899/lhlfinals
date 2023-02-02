//
// LearnThis! Resource Web Clipper
//

const serverUrl = "http://localhost:7070";


//
// MAIN script flow:
//


// loading/saving spinner default OFF
const spinElement = document.getElementById("spinner");

// TODO - check if user logged in
// TODO - fetch categories

document.getElementById("spinner").style.display = "none";

// listen for form submission
document.querySelector('#get-url').addEventListener('click', getCurrentTabUrl);

//
// set the elements on our form:
//

// call chrome tabs API
// set the default resource title to current page title
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  let currentTab = tabs[0];
  document.getElementById("page-title").value = currentTab.title;
  document.getElementById("page-url").value = currentTab.url;
});

// listen for close button
let closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
  window.close();
});





//
// functions
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

  // grab any supplied page url information
  let pageUrl = document.getElementById("page-url");
  let pageUrlData = pageUrl.value;

  // show spinner
  document.getElementById("spinner").style.display = "flex";

  
  // TODO -format the data for the JSON body
  // save to the server:
  fetch("http://localhost:7070/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ 
    title: pageTitleText,
    siteURL: pageUrlData,
    note: noteText,
    category: selectedOption,
})
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    alert("Data was sent successfully:", data);
    window.close();
  })
  .catch(error => {
    alert("There was a problem with the fetch operation:", error);
  });
  //alert(pageUrlData + " - category - " + selectedOption + " - notes - " + noteText + " - page title - " + pageTitleText);  
}

// check login state to server
const checkLoginStatus = async () => {
  try {
    const response = await fetch("http://localhost:7070/is-logged-in");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (data.isLoggedIn) {
      console.log("User is logged in");
    } else {
      console.log("User is not logged in");
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};


// fetch categories from server listen
function fetchCats() {
  fetch(serverUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Do something with the fetched data
  })
  .catch(error => console.error(error));
}