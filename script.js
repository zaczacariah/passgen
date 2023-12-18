// Assignment code here
function generatePassword(){
  //Declare password string to be returned
  var tempPass = '';

  // Declare types of password strings
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()_+`~?/:;,.[]\|";
  var fullString = '';
  var random;
  var x = 0;
  //Ask how long you want the password
  var charLen = prompt("How many characters would you like your password to contain?");


  //Error Check the length value
  while (charLen < 8 || charLen > 128 || isNaN(charLen)) {
    
    if(charLen < 8){
      alert("Must be greater than 8!");
    } else if(charLen > 128){
      alert("Must be less than 128");
    } else if(isNaN(charLen)){
      alert("Must be a Number.");
    }

    charLen = prompt("How many characters would you like your password to contain?");
  }

  //Ensure atleast one option is picked
    while(x < 1){
    // Ask if you want lowercase letters?
    var charLower = confirm("Would you like to include lowercase letters?");

    if(charLower === true){
      x += 1;
      //Append to list lowercase characters
      fullString += alpha;
      console.log(fullString);
    } 

    //Ask if you want uppercase letters?
    var charUpper = confirm("Would you like to include uppercase letters?");

    if(charUpper === true){
      x += 1;
      //Append to list uppercase letters characters
      fullString += alphaUpper;
      console.log(fullString);
    }
    
    //Ask if you want to include numbers?
    var charNumeric = confirm("Would you like to include numbers?");

    if(charNumeric === true){
      x += 1;
      //Append to list numerical characters
      fullString += numeric;
      console.log(fullString);
    }
    // Ask if you want to include special characters
    var charSpec = confirm("Would you like to use special characters?");

    if(charSpec === true){
      x += 1;
      //Append to list special characters
      fullString += special;
      console.log(fullString);
    }

    //If no option was picked alert and restart
    if(x < 1){
      alert("You must pick one!");
    }
  }

      for(var i = 0; i < charLen; i++) {
        random = Math.floor(Math.random() * fullString.length);
        tempPass += fullString[random];
      }

// Return password
return tempPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  //Call generatePassword and pass returned value to password
  var password = generatePassword();
  //Populate #password textarea with password
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
