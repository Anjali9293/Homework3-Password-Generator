// Assignment Code
var generateBtn = document.querySelector("#generate");

var charSet1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //defined variable that stores uppercase characters
var charSet2 = "abcdefghijklmnopqrstuvwx"; //defined variable that stores lowercase character
var charSet3 = "!@#$%^&*()_+{}|:<>?,./;'[]\=-`~'"; //defined variable that stores special characters
var charSet4 = "0123456789"; //defined veraibale that stores numeric characters


function randomCharacter(str) {   //function returns one random characters from given string
    var random = (parseInt(Math.random() * str.length));
    return str[random];
}

function generatePassword() { // function to collect user's choice of character type and return a string of randomly generated password
    var password = "";
    var selectedOption = "";
    var charLength = prompt("How many Character would you like the password to contain?"); //prompts user to choose the length of the passwrod and stores the result

    while (charLength > 128 || charLength < 8) {        //while loop to force user to select the length of characters between 8-128
        charLength = prompt("Password must be more than 8 characters and less than 128 characters long");

    }

    var specialChar = confirm("Click OK to confirm including special character"); //confims if user would like to include special characters
    if (specialChar) {                                                            //adds special characters to selectedOption and stores the result in selectedOption
        selectedOption += charSet3;
    }

    var numChar = confirm("Click OK to confirm including numeric character"); //confims if user would like to include numeric characters
    if (numChar) {                                                            //adds numeric characters to selectedOption and stores the result in selectedOption
        selectedOption += charSet4;
    }

    var lowChar = confirm("Click OK to confirm including Lowercase character"); //confims if user would like to include lowercase characters
    if (lowChar) {                                                              //adds lowercase characters to selectedOption and stores the result in selectedOption
        selectedOption += charSet2;
    }

    var upChar = confirm("Click OK to confirm including uppercase character"); //confims if user would like to include uppercase characters
    if (upChar) {                                                              //adds uppercase characters to selectedOption  and stores the result in selectedOption
        selectedOption += charSet1;
    }

    if (selectedOption == "") {                                              //if none of the above options is selected, alerts user with the error message and returns an empty string
        alert("ERROR!! \nOne of the options needs to be selected.Press Ok to continue");
        return "";
    }

    for (var i = 0; i < charLength; i++) {   //for loop that goes from 0 to charLength adding one random character to the string at a time
        password += randomCharacter(selectedOption);
    }
    return password;                        //returns password as a string of random characters
}


// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    password = generatePassword();
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);