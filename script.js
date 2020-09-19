// Assignment Code


var charSet1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSet2 = "abcdefghijklmnopqrstuvwx";
var charSet3 = "!@#$%^&*()_+{}|:<>?,./;'[]\=-`~'";
var charSet4 = "0123456789";


function randomCharacter(str) {
    var random = (parseInt(Math.random() * str.length));
    console.log(random)
    return str[random];
}

function generatePassword() {
    var password = "";
    var selectedOption = "";
    var charLength = prompt("How many Character would you like the password to contain?");

    while (charLength > 128 || charLength < 8) {
        charLength = prompt("Password must be more than 8 characters and less than 128 characters long");

    }

    var specialChar = confirm("Click OK to confirm including special character");
    if (specialChar) {
        selectedOption += charSet3;
    }

    var numChar = confirm("Click OK to confirm including numeric character");
    if (numChar) {
        selectedOption += charSet4;
    }

    var lowChar = confirm("Click OK to confirm including Lowercase character");
    if (lowChar) {
        selectedOption += charSet2;
    }

    var upChar = confirm("Click OK to confirm including uppercase character");
    if (upChar) {
        selectedOption += charSet1;
    }

    if (selectedOption == "") {
        alert("ERROR!! \nOne of the options needs to be selected.Press Ok to continue");
        return "";
    }

    for (var i = 0; i < charLength; i++) {
        password += randomCharacter(selectedOption);
    }
    return password;
}


// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    password = generatePassword();
    passwordText.value = password;

}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);