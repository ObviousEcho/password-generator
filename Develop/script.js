// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.setAttribute("style", "color: hsl(360, 91%, 36%)");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// My code:
// ===================================================

// prompt and confirm variables
var length;
var lowercase;
var uppercase;
var specialCharc;
var numbers;

// array variables
var abc = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = abc.split("");
var upperArray = abc.toUpperCase().split("");
var abcArray = lowerArray.concat(upperArray);
var alphaArray;

var special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var specCharArray = special.split("");
var numbArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charNumbArray;

var passwordArray;
var randomArray;
var password;

// function to generate length of minimum 8 characters and max 128 prompt
lengthPrompt = function () {
  length = prompt(
    "Please enter a password length between 8 and 128 characters."
  );

  if (length >= 8 && length <= 128 && length !== null && length !== "") {
    lowercasePrompt();
  } else {
    length = 0;
  }
};

// function to generate lowercase and/or uppercase prompt
lowercasePrompt = function () {
  var text = prompt(
    "Would you like your password to contain lowercase letters?\n Please enter 'yes' or 'no'."
  );

  if (text === "yes" && text !== null && text !== "") {
    lowercase = true;
    text = prompt(
      "Would you like your password to contain uppercase letters?\n Please enter 'yes' or 'no'."
    );
    {
      if (text === "yes" && text !== null && text !== "") {
        uppercase = true;
        characterPrompt();
      } else if (text === "no" && text !== null && text !== "") {
        uppercase = false;
        characterPrompt();
      } else {
        uppercase = null;
        length = 0;
      }
    }
  } else if (text === "no" && text !== null && text !== "") {
    lowercase = false;
    uppercase = true;
    characterPrompt();
  } else {
    lowercase = null;
    uppercase = null;
    length = 0;
  }
};

// function to generate special characters confirm prompt
characterPrompt = function () {
  var text = prompt(
    "Would you like your password to contain special characters?\n Please enter 'yes' or 'no'."
  );
  if (text === "yes" && text !== null && text !== "") {
    specialCharc = true;
    numericPrompt();
  } else if (text === "no" && text !== null && text !== "") {
    specialCharc = false;
    numericPrompt();
  } else {
    specialCharc = null;
    length = 0;
  }
};

// function to generate numeric confirm prompt
numericPrompt = function () {
  var text = prompt(
    "Would you like your password to contain numbers?\n Please enter 'yes' or 'no'."
  );
  if (text === "yes" && text !== null && text !== "") {
    numbers = true;
  } else if (text === "no" && text !== null && text !== "") {
    numbers = false;
  } else {
    numbers = null;
    length = 0;
  }
};

// function to combine alphabet arrays based upon prompt answers
combineLetterArray = function () {
  if (lowercase === true && uppercase === false) {
    alphaArray = lowerArray;
  } else if (lowercase === false && uppercase === true) {
    alphaArray = upperArray;
  } else {
    alphaArray = abcArray;
  }
};

// function to combine special char and numb arrays based upon prompt answers
combineCharNumbArray = function () {
  if (specialCharc === true && numbers === true) {
    charNumbArray = specCharArray.concat(numbArray);
  } else if (specialCharc === false && numbers === true) {
    charNumbArray = numbArray;
  } else if (specialCharc === true && numbers === false) {
    charNumbArray = specCharArray;
  } else {
    charNumbArray = null;
  }
};

// function to combine alpha and charNumbArray based upon prompt answers
passwordFunc = function () {
  if (charNumbArray !== null) {
    passwordArray = alphaArray.concat(charNumbArray);
  } else {
    passwordArray = alphaArray;
  }
};

// function to select random characters
shuffleArray = function (arr) {
  var curId = arr.length;

  while (0 !== curId) {
    var randId = Math.floor(Math.random() * curId);
    curId -= 1;
    var tmp = arr[curId];
    arr[curId] = arr[randId];
    arr[randId] = tmp;
  }
  return (randomArray = arr);
};

// function to select random password
generateFunc = function () {
  var temp = randomArray.slice(0, length);
  return (password = temp.join(""));
};

// Generate password function:
// =======================================================

function generatePassword() {
  lengthPrompt();
  combineLetterArray();
  combineCharNumbArray();
  passwordFunc();
  shuffleArray(passwordArray);
  generateFunc();
  return password;
}
