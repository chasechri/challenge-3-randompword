// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("clicked button")

    // 1 prompt user
    var passwordLength = window.prompt('How many characters would you like your password to be?');

    var confirmSpecialcharacters = window.confirm('Click OK to confirm including special characters');

    var confirmLowercaseletters = window.confirm('Click OK to confirm including lowercase characters');

    var confirmUppercaseletters = window.confirm('Click Ok to confirm including uppercase characters');

    // -password length between 8-128
    // -lowercase, uppercase, special characters
    // 2 validate the input 
    // 3 generate pword base off the criteria
    // 4 display password on page
    
return "password will go here"
}


function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
