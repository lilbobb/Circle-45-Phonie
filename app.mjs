function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
   const header = document.querySelector('h2');
    if(header) {
      header.textContent = 'Identify the telecoms carrier from a phone number';
    }
  };
  let logo = ["😂", "😍", "😌", "🐶"]

    let phoneNumber = document.getElementById("number-el")
    let displayLogo = document.getElementById("logo")
    let buttonEl = document.getElementById('btn')
  
   buttonEl.addEventListener("click", function() {
     let baseNumber = phoneNumber.value
     
     displayLogo.textContent =logo[0]
     
   });
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //