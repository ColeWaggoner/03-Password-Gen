var special;
var numbers;
var upLetters;
var lowLetters;
var length;

function rulesPassword() {
  length = prompt('How many characters in the password? (8-128)');

  console.log(typeof length);

  if(!length) {
    return;
  }

  else if(length < 8 || length > 128) {
    alert('Please enter a number between 8 and 128');
    rulesPassword();
  }
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
