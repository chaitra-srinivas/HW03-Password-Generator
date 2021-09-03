// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Write password to the #password input
function writePassword() {
  var userInput = getUserInput();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  generatePassword();
  {
  }
}

// Asking for user input
function getUserInput()
{
  var pwdLength = prompt(
    "Choose the length of the password: 8 - 128 characters"
  );

  // validating user input
  if (pwdLength < 8 || pwdLength > 128) 
    {
    alert("Please enter a value between 8 - 128 characters for password length");
    return;
    } 
  else
  { 
    var isSplChars = confirm("Do you want to include special characters?");
    var isNumeric = confirm("Do you want to include numeric values?");
    var isLowerCase = confirm("Do you want to include lowercase characters?");
    var isUpperCase = confirm("Do you want to include uppercase characters?");

    // validating user input
    if (
      isSplChars === false &&
      isNumeric === false &&
      isLowerCase === false &&
      isUpperCase === false
      ) 
     {
      alert("Please choose atleast one type of character to generate unique password.");
     }
  }return;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
