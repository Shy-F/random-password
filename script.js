// Assignment code here
var passwordNumber = ['0123456789'];
var passwordCharacter = ['!@#$%^&*()_+-='];
var passwordUppercase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var passwordLowercase = ['abcdefghijklmnopqrstuvwxyz'];
var passLength = '';
var randomPass = '';

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //debugger;
  passLength = window.prompt('Password Length? (choose a number 8 - 128)');
  var passVal = parseInt(passLength);
  if (Number.isNaN(passLength)) {
    alert('Password must be a number')
    generatePassword();
  }
  if (passVal < 8 || passVal > 128) {
    window.alert('Password must be between 8 and 128');
    generatePassword();
  }

  var numConfirm = window.confirm('Does your password include numbers?(OK for yes Cancel for no)');
  if (numConfirm == true){
    alert('Your password will include numbers');
  }else {
    alert('Your password will not include numbers');
  }
  
  var charConfirm = window.confirm('Does your password include special characters?(OK for yes Cancel for no)');

  var upperConfirm = window.confirm('Does your password include Uppercase (OK for yes Cancel for no)');

  var lowerConfirm = window.confirm('Does your password include Lowercase (OK for yes Cancel for no)');

if (numConfirm == false && charConfirm == false && upperConfirm == false && lowerConfirm == false){
  alert('Must select atleast one criteria')
return null
}

   var passInput = {
     numConfirm: numConfirm,
     charConfirm: charConfirm,
     upperConfirm: upperConfirm,
     lowerConfirm: lowerConfirm,
     passVal: passVal,
   };
   return combineCriteria(passInput);
  }

  function combineCriteria(choices){
    if (choices.numConfirm === true){
      randomPass += numConfirm;
    }

    if (choices.charConfirm === true){
      randomPass += charConfirm
    }

    if (choices.upperConfirm === true){
      randomPass += upperConfirm
    }

    if (choices.lowerConfirm === true){
      randomPass += lowerConfirm
    }



    var randomPass = '';
    for (var i = 0; i < choices.passVal; i++){
      randomPass =
        randomPass +

    randomPass.numConfirm(Math.floor(Math.random()*
    randomPass.length));
    }
    return randomPass
  };
generateBtn.addEventListener('click', generatePassword);
// Write password to the #password input
function writePassword() {
   debugger;
   var password = generatePassword();
  var passwordText = document.querySelector("#password");

   passwordText.value = password;
    return password
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
