//Interactive points on the webpage
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");
let passwordBox = document.querySelector("#password");

//Arrays for function to choose from
const lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const symbolsArr = ["!", "@", "#", "$", "%", "&", "*", "?"]
const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

generateBtn.addEventListener("click", function (event) {
    //Final password variables
    let optionsWanted = "";
    let builtPasswordArr = [];
    
    //Questions for user to customize password
    let lengthWant = prompt("How many characters do you want (min 8, max 128)?");
    if (lengthWant >= 8 && lengthWant <= 128) {
        let symbolsWant = confirm("Do you want special characters included?");
        let numbersWant = confirm("Do you want numbers included?");
        let lowerWant = confirm("Do you want lowercase characters?");
        let upperWant = confirm("Do you want uppercase characters?");

        //If true, join array into the optionsWanted string (an array of characters)
        if (symbolsWant) {
            optionsWanted += symbolsArr.join("");
        }
        if (numbersWant) {
            optionsWanted += numbersArr.join("");
        }
        if (lowerWant) {
            optionsWanted += lowerArr.join("");
        }
        if (upperWant) {
            optionsWanted += upperArr.join("");
        }

        //Loops thru the optionsWanted array and randomly pulls characters until lengthWant is fullfilled
        for (var i = 0; i < lengthWant; i++) {
            let randomOptionIndex = Math.floor(Math.random() * optionsWanted.length);
            let randomOption = optionsWanted[randomOptionIndex - 1];
            builtPasswordArr.push(randomOption);

        }

        //Write builtPassword to passwordBox
        let builtPassword = builtPasswordArr.join('');
        passwordBox.innerHTML = builtPassword; 

    } else {
        alert("Please enter a number between 8 and 128");
    }
});

//Copy password to clipboard
copyBtn.addEventListener("click", function () {
    passwordBox.select();
    document.execCommand("copy");
    alert("Copied the password " + passwordBox.value);
  });

