
function generate() {
 let complexity = document.getElementById('').value

 //PASSWORD VALUES
 let values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+'

 let password = ''

 //creat loop for characters
 for (var i = 0; i <= complexity; i++) {
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))
 }

 //add to textbox
 document.getElementById('#password')value = password
}