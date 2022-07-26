// Get references to the #generate element
var generateEl = document.querySelector("#generate");

//function to create a random integer
function randomI(min, max) {
    if (!max) {
        max = min
        min = 0
    }
    var numberValue = Math.random()
    return Math.floor(min * (1 - numberValue) + numberValue * max)
}

// Math.floor(Math.random() * 12)
function randomValue(list) {
    return list[randomI(list.length)]
}

//Function to generate the password
function generatePassword() {

    //a. Prompt and code for creating the length and keeping the length between 8-128
    var input = window.prompt("How many characters would you like your password to be?")

    var length = parseInt(input)

    if (Number.isNaN(length)) {
        alert("Please enter a valid number.")
        return null
    }

    if (length < 8 || length > 128) {
        alert("Password length should be between 8 and 128 characters")
        return null
    }

    // Variables for prompt questions that include - lower, upper, special characters, and numbers

    var upperCase = confirm("Select the ok button if you want uppercase characters in your password.")

    var lowerCase = confirm("Select the ok button if you want lowercase characters in your password.")

    var specialChar = confirm("Select the ok button if you want special characters in your password.")

    var numberChar = confirm("Select the ok button if you want numbers in your password.")

    //Variables setting the array of data by upper case,lower case, special characters, and numbers 

    var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    var specialArr = ["!", "@", "#", "%", "^", "&", "*"]

    var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    //Created a array variable to use later in the code. This variable will in turn be what is used to create the password. 
    var pwChar = []
    //If statement if the user picks the prompt for upper case character then this grabs an item individually
    if (upperCase === true) {
        pwChar.push(...upperArr)
    }
    //If statement if the user picks the prompt for lower case character then this grabs an item individually

    if (lowerCase === true) {
        pwChar.push(...lowerArr)
    }
    //If statement if the user picks the prompt for special character then this grabs an item individually

    if (specialChar === true) {
        pwChar.push(...specialArr)
    }
    //If statement if the user picks the prompt for number then this grabs an item individually

    if (numberChar === true) {
        pwChar.push(...numberArr)

    }

    if (pwChar.length === 0) {
        pwChar.push(lowerArr)
    }

    //Validates input - this for statement grabs a random character from the array of data variable pwChar and makes sure that this array is in the designated length that the user selected in the first prompt.  
    var generatePassword = ""

    for (var i = 0; i < length; i++) {
        generatePassword += pwChar[Math.floor(Math.random() * pwChar.length)]
    }
    return generatePassword


}

// Generates password based on criteria selected uses the write password fuction to select the values
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button - Display password on the page
generateEl.addEventListener("click", writePassword);