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
// instead of li-elements, we should rather use 'listElement', this is more readable @Robert
const suggestions = document.querySelector('#suggested-li')
const listElements = document.querySelector('#list-El')
const inputNumber = document.querySelector('#phone--input')



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


//function to suggest Numbers-- iheanacho
const totalData = [...mtn, ...airtel, ...glo, ...etisalat]

const loadSuggestedNumbers = (data, element) => {
  element.innerHTML = ''
  let innerElement = ''
  if (data) {
    data.forEach((num) => {
      return innerElement += `<li id='list-El'>${num}<li>`
    });
  }

  element.innerHTML = innerElement;
}

const changesData = (arr) => {
  const newArr = arr.map((e) => {
    return '+234' + e.slice(1, 4)
  })

  return newArr
}


function filterData(data, searchNum) {
  return data.filter((e) => e.includes(searchNum))
}

inputNumber.addEventListener("input", function() {
  logos.forEach((e) => {
    e.classList.remove('visible')
  })

  if (inputNumber.value.length === 0) {
    loadSuggestedNumbers([], suggestions)
  } if (inputNumber.value > 2 && inputNumber.value.includes('0')) {
    const filteredData = filterData(totalData, inputNumber.value);
    loadSuggestedNumbers(filteredData, suggestions)
  } if (inputNumber.value > 4 && inputNumber.value.includes(+234)) {
    const filteredData = filterData(changesData(totalData), inputNumber.value);
    loadSuggestedNumbers(filteredData, suggestions)
  }

  //error alert for invalid number inputs(more to be done) -- Joshua
  if (inputNumber.value.includes(+234) && inputNumber.value.length > 13) {
    alert("Please input a valid phone number")
  } else if (inputNumber.value.length > 11 && inputNumber.value.length < 11) {
    alert("Please input a valid phone number")
  }
})
//cooking something here...
 // li-elements.addEventListener('click', function(e)=>{
 //  e.preventDefault();
 //   inputNumber.value = li-element
 // })

//Function to Validate and Update Number - Iheanacho
const validatePhoneNumber = (e) => {
  e.preventDefault();
  const baseNumber = phoneNumber.value

  if (baseNumber.slice(0, 1) == 0) {
    console.log('0')
    let updatedNumber = baseNumber
    displayLogo(updatedNumber)
  } else if (baseNumber.slice(0, 3).includes(+234)) {
    console.log('+234')
    let updatedNumber = '0' + baseNumber.slice(3)
    displayLogo(updatedNumber)
  } else (console.log('error'))

}
//we need to create a special case for error cases
//also need onChange handler on the input(so whenever someone types the result formats)







// function to display logo
function displayLogo(updatedNumber) {
  let baseNumber = updatedNumber
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
buttonEl.addEventListener('click', validatePhoneNumber)


// The changes ended here 👆








// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //