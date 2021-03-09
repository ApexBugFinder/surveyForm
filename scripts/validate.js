// Add Listeners
document
  .getElementById("inputEmailId")
  .addEventListener("keyup", emailChangeFunction);
document
  .getElementById("inputPasswordId")
  .addEventListener("keyup", passwordChangeFunction);
document
  .getElementById("inputConfirmId")
  .addEventListener("keyup", confirmChangeFunction);

// Email Requirements
// Must be a valid email address
// Email is Required

// Password Requirements
// Password is Required
// Password must Contain 6-20 characters
// Password must have at least one number digit
// Password must have at least one upper and lowercase character

// Confirm Requirements
// Confirm is Required
// Confirm password must match Password

// Define Variables
// Inputs:
var emailInput = document.getElementById("inputEmailId");
var emailIsDirty = false;
var passwordInput = document.getElementById("inputPasswordId");
var passwordIsDirty = false;
var confirmInput = document.getElementById("inputConfirmId");
var confirmIsDirty = false;
var regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
var regexMissingDigit = /^(?=.*\d)/;
var regexLength = /^.{6,20}$/;
var regexLowerCase = /^(?=.*[a-z])/;
var regexUpperCase = /^(?=.*[A-Z])/;
//var regexUpperCase = /[A-Z]{1}/;
var passEntered = false;
var passLength = false;
var missingUpp = false;

var missingLwr = false;

var missingDig = false;
var regexDig = /^(?=.*\d)$/;

var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Errors:
var emailError = document.getElementById("emailError");

var passwordError = document.getElementById("passwordError");
var confirmError = document.getElementById("confirmError");
var formError = document.getElementById("formError");

// Error Responses
var errorResponses = {
  email: {
    emailRequired: "Email is Required.",
    emailInvalid: "Invalid Email.",
  },

  password: {
    passwordReq: "Password Is required.",
    passwordMissingNumber: "Password must contain at least one numeric digit.",
    passwordLength: "Password needs to be between 6-20 letters.",
    passwordUppCase: "Password must contain at least one uppercase",
    passwordLwrCase: "Password must contain at least one lowercase",
  },
  confirm: {
    confirmReq: "You must confirm your password",
    confirmNoMatch: "Your passwords do not match",
  },
};

var validEmail = false;
var validPassword = false;
var validConfirm = false;

function createErrorFieldsFunction() {
  console.log("Hello");
  // 1. Create ul
  // 2. Create div
  // 3. Loop through error listing object
  // 4. Create list items and assign class
  // 5. Append to unordered list
  // 6. Append to div

  for (var errorType in errorResponses) {
    console.log("My ErrorType: ", errorType);
    var divName = errorType + "Error";

    var errorDiv = document.getElementById(divName);
    var list = document.createElement("ul");
    console.log(errorResponses[errorType]);
    for (var errorKey in errorResponses[errorType]) {
      console.log("My Error Key: ", errorKey);
      var li = document.createElement("li");
      var error = errorResponses[errorType][errorKey];
      console.log("My Error: ", error);
      li.textContent = error;
      li.setAttribute("id", errorKey);
      // change class to hide
      li.classList.add("noDisplay");
      list.appendChild(li);
    }
    errorDiv.appendChild(list);
  }
}

// CHANGE FUNCTIONS - they update the Error fields

function emailChangeFunction() {
  var errorEReqLi = document.getElementById("emailRequired");
  var errorEInvLi = document.getElementById("emailInvalid");

  console.log("Email Input: ", emailInput.value);
  if (emailInput.value != emailInput.defaultValue) {
    emailIsDirty = true;
  }
  if (emailInput.value == "") {
    validEmail = false;
    console.log("EMPTY STRING BRO");

    errorEReqLi.classList.remove("noDisplay");

    console.log("Email is Dirty: ", emailIsDirty);
  }
  // else if compare against regex true
  else if (regexEmail.test(emailInput.value)) {
    console.log("Valid Email");
    validEmail = true;
    errorEReqLi.classname += " noDisplay";
    errorEInvLi.classList.add("noDisplay");
    emailInput.classList.remove("errorInput");
  } else {
    // Validate Email
    validEmail = false;

    // Remove Email Required Error
    errorEReqLi.classList.add("noDisplay");

    // Show Invalid Email Error
    errorEInvLi.classList.remove("noDisplay");
    // add error class to input field
    emailInput.classList.add("errorInput");
  }
}

function passwordChangeFunction() {
  var errorPassReqLi = document.getElementById("passwordReq");
  var errorPassNumLi = document.getElementById("passwordMissingNumber");
  var errorPassLengthLi = document.getElementById("passwordLength");
  var errorPassUppCaseLi = document.getElementById("passwordUppCase");
  var errorPassLwrCaseLi = document.getElementById("passwordLwrCase");

  console.log("Password Input: ", passwordInput.value);
  var myPass = passwordInput.value;

  if (myPass != passwordInput.defaultValue) {
    passwordIsDirty = true;
  }
  if (passwordInput.value.match(regexPass) && passwordIsDirty == true) {
    // Password is valid
    console.log("Valid Password");
    validPassword = true;

    // Remove all Password Errors and Password error field class

    errorPassReqLi.classList.add("noDisplay");
    errorPassNumLi.classList.add("noDisplay");
    errorPassLengthLi.classList.add("noDisplay");
    errorPassUppCaseLi.classList.add("noDisplay");
    errorPassLwrCaseLi.classList.add("noDisplay");

    passwordError.classList.remove("errorInput");

    return true;
  }

  if (!passwordInput.value.match(regexPass) && passwordIsDirty == true) {
    validPassword = false;

    // PASSWORD REQUIRED

    if (passwordInput.value == "" && passwordIsDirty == true) {
      // Empty String is not a valid password
      validPassword = false;

      errorPassReqLi.classList.remove("noDisplay");
      errorPassNumLi.classList.add("noDisplay");
      errorPassLengthLi.classList.add("noDisplay");
      errorPassUppCaseLi.classList.add("noDisplay");
      errorPassLwrCaseLi.classList.add("noDisplay");

      passwordInput.className = "errorInput";
    } else {
      //===============================================
      // REMOVE PASSWORD REQUIRED

      if (!errorPassReqLi.classList.contains("noDisplay")) {
        errorPassReqLi.classList.add("noDisplay");
      }

      console.log(passwordInput.value);
      console.log("HELLO");
      console.log(missingDig);
      console.log(passwordInput.value.match(regexMissingDigit));
      // if password has been entered but not

      //========================================================================
      // PASSWORD NUMERIC
      console.log(passwordInput.value);

      if (!passwordInput.value.match(regexMissingDigit)) {
        console.log(
          "Contains upper case: ",
          passwordInput.value.match(regexUpperCase)
        );
        // SHOW ERROR
        if (errorPassNumLi.classList.contains("noDisplay")) {
          errorPassNumLi.classList.remove("noDisplay");
        }
      }
      // if (passwordInput.value.match(regexUpperCase))
      else {
        // HIDE ERROR
        if (!errorPassNumLi.classList.contains("noDisplay")) {
          errorPassNumLi.classList.add("noDisplay");
        }
      }

      //========================================================================
      // PASSWORD MISSING UPPERCASE

      if (!passwordInput.value.match(regexUpperCase)) {
        console.log(
          "Contains upper case: ",
          passwordInput.value.match(regexUpperCase)
        );
        // SHOW ERROR
        if (errorPassUppCaseLi.classList.contains("noDisplay")) {
          errorPassUppCaseLi.classList.remove("noDisplay");
        }
      }
      // if (passwordInput.value.match(regexUpperCase))
      else {
        // HIDE ERROR
        if (!errorPassUppCaseLi.classList.contains("noDisplay")) {
          errorPassUppCaseLi.classList.add("noDisplay");
        }
      }

      //========================================================================
      // PASSWORD MISSING LOWERCASE

      if (!passwordInput.value.match(regexLowerCase)) {
        console.log(
          "Contains LOWER case: ",
          passwordInput.value.match(regexLowerCase)
        );
        // SHOW ERROR
        if (errorPassLwrCaseLi.classList.contains("noDisplay")) {
          errorPassLwrCaseLi.classList.remove("noDisplay");
        }
      } else {
        // HIDE ERROR
        if (!errorPassLwrCaseLi.classList.contains("noDisplay")) {
          errorPassLwrCaseLi.classList.add("noDisplay");
        }
      }

      // =================================================================================
      // =================================================================================
      // PASSWORD LENGTH NOT BETWEEN 6-20 CHARACTERS

      if (!passwordInput.value.match(regexLength)) {
        console.log(errorResponses.password.passwordLength + " - ERROR ");

        // SHOW ERROR
        if (errorPassLengthLi.classList.contains("noDisplay")) {
          errorPassLengthLi.classList.remove("noDisplay");
        }
      } else {
        // HIDE ERROR
        if (!errorPassLengthLi.classList.contains("noDisplay")) {
          errorPassLengthLi.classList.add("noDisplay");
        }
      }
    }
  }
}

function confirmChangeFunction() {
  console.log("Confirm Input: ", confirmInput.value);
  var confInputDirty = false;

  errorConfirmReqLi = document.getElementById("confirmReq");
  errorConfirmNoMatchLi = document.getElementById("confirmNoMatch");

  // 1.  Confirmed
  // 2.  Not confirmed & empty String - confirmReq
  // 3   Not confirmed & no match - confirmNoMatch

  // CONFIRM REQUIRED

  validConfirm = false;
  // confirmReq: "You must confirm your password",
  if (confirmInput.value === "") {
    // show Required
    if (errorConfirmReqLi.classList.contains("noDisplay")) {
      errorConfirmReqLi.classList.remove("noDisplay");
    }
    // HIDE NoMatch
    if (!errorConfirmNoMatchLi.classList.contains("noDisplay")) {
      errorConfirmNoMatchLi.classList.add("noDisplay");
    }
  } else if (
    confirmInput.value != "" &&
    confirmInput.value != passwordInput.value
  ) {
    validConfirm = false;
    console.log("Valid Confirm: ", validConfirm);
    // show confirmNoMatch
    if (errorConfirmNoMatchLi.classList.contains("noDisplay")) {
      errorConfirmNoMatchLi.classList.remove("noDisplay");
    }

    // Hide Required
    if (!errorConfirmReqLi.classList.contains("noDisplay")) {
      errorConfirmReqLi.classList.add("noDisplay");
    }
  } else if (passwordInput.value == confirmInput.value) {
    console.log("Passwords Match");
    validConfirm = true;
    console.log("Valid Confirm: ", validConfirm);

    // Show REQ
    if (errorConfirmReqLi.classList.contains("noDisplay")) {
      errorConfirmReqLi.classList.add("noDisplay");
    }
    // HIDE NO MATCH
    if (!errorConfirmNoMatchLi.classList.contains("noDisplay")) {
      errorConfirmNoMatchLi.classList.add("noDisplay");
    }
  }
}

//  VALIDATE - if the error fields are empty and all the fields are dirty then the submit is successful
function validate(myForm) {
  console.log("email: ", myForm.email.value);
  if (validConfirm && validPassword && validEmail) {
    console.log("vc: ", validConfirm);
    console.log("ve: ", validEmail);
    console.log("vp: ", validPassword);

    goUrl();
  } else {
    console.log("vc: ", validConfirm);
    console.log("ve: ", validEmail);
    console.log("vp: ", validPassword);
    console.log("****Validation Failed****");
    return;
  }
}

function goUrl() {
  location.href =
    "file:///home/apexbugfinder/Documents/codePractice/surveyForm/registered.html";
}
window.addEventListener("load", (event) => {
  console.log("The page has loaded");
  createErrorFieldsFunction();
});
