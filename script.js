// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("clicked button")

    var passwordLength = Number.parseInt(
      prompt("How many characters would you like your password to contain?")
    );

    if(Number.isNaN(passwordLength)) {
      alert("Please enter a number");
    } else if (passwordLength < 8 || passwordLength > 128) {
      alert("Password be between 8 and 128 characters");
    }
    else {
      var includeLowerCase = confirm("Click OK to confirm lowercase letters");
      var includeUpperCase = confirm("Click OK to confirm uppercase letters");
      var includeSpecialCharacters = confirm("Click OK to confirm special characters");

      if (!includeLowerCase && !includeUpperCase && !includeSpecialCharacters) {
        alert("Password must include lowercase, uppercase, and special characters");
      } else {
        var validCharacters = "";
        if (includeLowerCase) {
          validCharacters = validCharacters + "abcdefghijklmnopqrstuvwxyz";
        }
        if (includeUpperCase) {
          validCharacters = validCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (includeSpecialCharacters) {
          validCharacters = validCharacters + "!@#$%^&*()";
        }

        var password = "";
        for (var counter = 0; counter < passwordLength; counter = counter + 1) {
          var randomNumber = Math.floor(Math.random() * validCharacters.length);
          password = password + validCharacters.at(randomNumber);
        }
        return(password);
      }
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
