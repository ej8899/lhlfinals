// wrap inside IIFE to keep scope contained
(function() {
  
//const description = document.querySelector('head meta[name="description"]').getAttribute('content');
let zdescription = "test"
const zmetas = document.getElementsByTagName('meta');

for (let i = 0; i < zmetas.length; i++) {
  if (zmetas[i].getAttribute('name') === 'description') {
    zdescription = zmetas[i].getAttribute('content')
    
    chrome.runtime.sendMessage({ zdescription });
  }
}

})();
