// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Define character sets
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()-_+=";

// Function to prompt user for password criteria and generate password
function generatePassword() {
  // Prompt for password length
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));


  // Validate length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128 characters.");
    return "";
  }

  // Prompt for character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return "";
  }

  // Build character set based on selected criteria
  var charset = "";
  if (includeLowercase) charset += lowercaseChars;
  if (includeUppercase) charset += uppercaseChars;
  if (includeNumeric) charset += numericChars;
  if (includeSpecial) charset += specialChars;

  // Generate password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
