// . The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function Validator(password) {

  if (password.length<9) {
    return false
  }

  const hasuper=/[A-Z]/.test(password)
  const haslower=/[a-z]/.test(password)
  const hasdigit=/\d/.test(password)

  if (hasuper&&haslower&&hasdigit){

    return true
  }
  return false
  
}


let pas="Pasword"
let Valid=Validator(pas)
console.log(Valid);
