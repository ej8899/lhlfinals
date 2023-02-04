//
// LearnThis! Resource Web Clipper
//

const serverUrl = "http://localhost:7070";


//
// MAIN script flow:
//


// loading/saving spinner default OFF
const spinElement = document.getElementById("spinner");

// populate the category list
const selectElement = document.querySelector('#options');
let options = fetchCats();
options.forEach(option => {
  const optionElement = document.createElement("option");
  optionElement.value = option;
  optionElement.textContent = option;
  selectElement.appendChild(optionElement);
});

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
  chrome.scripting.executeScript( 
    {
      target: { tabId: currentTab.id, allFrames:true },
      files: ['./injectscript.js'],
    }
  );

  // alert("found desc:" + description)
  // if(description) {
  //   document.getElementById("page-description").value = description;
    
  // }
});


// Listen for messages from the injected script
chrome.runtime.onMessage.addListener((request, sender) => {
  document.getElementById("page-description").value = request.zdescription;
});

// listen for close button
let closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
  window.close();
});





//
// functions:
//

//  alpha sort an input array
function sortArrayAlphabetically(array)  {
  return array.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
};


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

  let pageDescription = document.getElementById("page-description").value;

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
  alert(pageUrlData + " - category: " + selectedOption + " - notes: " + noteText + " - page title: " + pageTitleText + " - description: " + pageDescription);  
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
  const typeCategory = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "Vue",
    "Node.js",
    "Express",
    "Next.js",
    "Ember",
    "Meteor",
    "jQuery",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "GraphQL",
    "Sass",
    "Less",
    "TypeScript",
    "Ruby on Rails",
    "Django",
    "Flask",
    "Spring",
    "Express.js",
    "Nest.js",
    "Adonis.js",
    "PHP",
    "ASP.NET",
    "Java",
    "Python",
    "C++",
    "C#",
    "Ruby",
    "Go",
    "Swift",
    "Kotlin",
    "Rust",
    "Scala",
    "SQL"
  ];
  let sortedArr = sortArrayAlphabetically(typeCategory);
  return (sortedArr);
}


