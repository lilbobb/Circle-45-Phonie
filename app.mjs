function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  const header = document.querySelector('h2');
  if (header) {
    header.textContent = 'Identify the telecoms carrier from a phone number';
  }
};
//emoji representing logo
let logo = ["😂", "😍", "😌", "🐶"]

// const numbers =
// let mtn = ['0814', '0810', '0803']
// airtel: ["0812", "0808", "0801"]
// }

// DOM element
// let phoneNumber = document.getElementById("number-el")
// let displayLogo = document.getElementById("logo")
// let buttonEl = document.getElementById('btn')


// eventListener using onclick on the button
//    buttonEl.addEventListener("click", function() {
//      // alert("entered")
// //      let baseNumber = phoneNumber.value

// // mtnNumber(result)


//    });

// const array = ["0813", "0806", "0703"]
// let input = "08175678456"

// let baseNumber = phoneNumber.value

// let result = input.slice(0,4)


// funtion mtnNumber(reuslt) {array.forEach(i => {
//     if (i === result)
//       displayLogo.textContent = logo[0]

//     // console.log("🐶")
//   } else {
//     null;
//   })
// }



//////////////////////////////////////////////////
// Changes Uche made

const logoWrapper = document.querySelector('.logo__wrapper');
const logos = document.querySelectorAll('.logo');
const phoneNumber = document.getElementById("phone--input");
const buttonEl = document.querySelector('.btn');


// networks
const mtn = ["0813", "0806", "0703", '0803', '0703', '0814', '0816', '0810', '0903'];
const airtel = ['0802', '0808', '0701', '0708', '0812', '0902'];
const glo = ['0805', '0807', '0705', '0815', '0811', '0905'];
const etisalat = ['0809', '0909', '0818', '0817'];


// function to display logo
function displayLogo() {  
  let baseNumber = phoneNumber.value
  let result = baseNumber.slice(0, 4)

  mtn.some(i => {
    if (i === result)
      logos[0].classList.add('visible')
  })

  airtel.some(i => {
    if (i === result)
      logos[1].classList.add('visible')
  })

  glo.some(i => {
    if (i === result)
      logos[2].classList.add('visible')
  })

  etisalat.some(i => {
    if (i === result)
      logos[3].classList.add('visible')
  })

  // logoWrapper.textContent = 'Unknown network'

}

// event handler on the 'Enter' button
buttonEl.addEventListener('click', displayLogo)


// The changes ended here 👆








// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //