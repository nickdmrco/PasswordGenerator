
var generateBtn = document.querySelector("#generate");


function generatePassword() {
 let length = parseInt(prompt('Choose a password length'))
 let upper = confirm('want upper?')
 let lower = confirm('lower')
 let nums = confirm('nums')
 let special = confirm('special')
 let upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 let lowerChar = 'abcdefghijklmnopqrstuvwxyz'
 let numsChar = '1234567890'
 let specialChar = '!@#$%^&*()_+'

 if (length < 129 && length > 7) {
  let newPass = ''
  let newPassChar = ''
  if (upper) {
   newPassChar += upperChar
  }
  if (lower) {
   newPassChar += lowerChar
  }
  if (nums) {
   newPassChar += numsChar
  }
  if (special) {
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

}// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
