const accountForm = document.forms[0]

const inputFName = document.querySelector('.inputFName')
const inputLName = document.querySelector('.inputLName')
const inputEmail = document.querySelector('.inputEmail')
const inputPassword = document.querySelector('.inputPassword')


function inputFNameCheck() {
  const input = inputFName.children[0]
  const errorImg = inputFName.children[1]
  const spanError = inputFName.nextElementSibling

  if (input.value == '' || input.value == undefined)  { 
    inputFName.classList.add('diverror')
    spanError.classList.remove('error')
    errorImg.classList.remove('error')
    return false
  } else {
        inputFName.classList.remove('diverror')
        spanError.classList.add('error')
        errorImg.classList.add('error')
      }
}

function inputLNameCheck() {
  const input = inputLName.children[0]
  const errorImg = inputLName.children[1]
  const spanError = inputLName.nextElementSibling
  

  if (input.value == '' || input.value == undefined)  { 
    inputLName.classList.add('diverror')
    spanError.classList.remove('error')
    errorImg.classList.remove('error')
    return false
  } else {
        inputLName.classList.remove('diverror')
        spanError.classList.add('error')
        errorImg.classList.add('error')
      }
}

function inputEmailCheck() {
  const input = inputEmail.children[0]
  const errorImg = inputEmail.children[1]
  const spanError = inputEmail.nextElementSibling

  if (input.value == '' || input.value == undefined || input.value.includes('@') == false || input.value.includes('.com') == false)  {
    
    inputEmail.classList.add('diverror')
    spanError.classList.remove('error')
    inputEmail.innerHTML= `
      <input type="email" placeholder="email@example.com" name="Email">
      <img src="images/icon-error.svg" alt="error-icon" class="">
    `
    return false
  } else {
        inputEmail.classList.remove('diverror')
        spanError.classList.add('error')
        errorImg.classList.add('error')
      }
}

function inputPasswordCheck() {
  const input = inputPassword.children[0]
  const errorImg = inputPassword.children[1]
  const spanError = inputPassword.nextElementSibling

  if (input.value == '' || input.value == undefined)  {
    
    inputPassword.classList.add('diverror')
    spanError.classList.remove('error')
    errorImg.classList.remove('error')
    spanError.innerHTML = 'Password cannot be empty'
    return false
    
  } if(input.value.length <= 5 ||  input.value.length > 15) {

    inputPassword.classList.add('diverror')
    spanError.classList.remove('error')
    errorImg.classList.remove('error')
    spanError.innerHTML = 'Password should have between 6 and 15 characteristics'
    return false
  }
  {
    inputPassword.classList.remove('diverror')
    spanError.classList.add('error')
    errorImg.classList.add('error')
  }
}


accountForm.onsubmit = e => {
  e.preventDefault()

  inputFNameCheck()
  inputLNameCheck()
  inputEmailCheck()
  inputPasswordCheck()

  if (inputFNameCheck() == false || inputLNameCheck() == false || inputEmailCheck() == false || inputPasswordCheck() == false) {
    return
  }

  accountForm.submit()
}