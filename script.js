
var generateBtn = document.querySelector("#generate");


function generatePassword() {
 let length = parseInt(prompt('Choose a password length'))
 let upper = confirm('Would you like uppercase letters?')
 let lower = confirm('Would you like lowercase letters?')
 let nums = confirm('Would you like numbers?')
 let special = confirm('Would you like special characters?')
 let upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 let lowerChar = 'abcdefghijklmnopqrstuvwxyz'
 let numsChar = '1234567890'
 let specialChar = '!@#$%^&*()_+'

 if (length < 129 && length > 7) {
  let newPass = ''
  let newPassChar = ''
  if upperChar {
   newPassChar += upperChar
  }
  if lowerChar {
   newPassChar += lowerChar
  }
  if numsChar {
   newPassChar += numsChar
  }
  if specialChar {
   newPassChar += specialChar
  }
  console.log(newPassChar)

  for (let i = 0; i < length; i++) {
   let newLetter = newPassChar[Math.floor(Math.random() * newPassChar.length)]
   newPass += newChar
  }
  console.log(newPass)
 } else {
  alert('wrong length')
 }

}
// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
