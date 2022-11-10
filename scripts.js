let input1 = document.getElementById("submit");
input1.addEventListener("click", (e) => {
  let fname = fnameInput.value;
  let lname = lnameInput.value;
  let emailAddress = emailAddressInput.value;
  let phoneNumber = phoneNumberInput.value;

  if (
    fname === "" ||
    lname === "" ||
    emailAddress === "" ||
    phoneNumber === ""
  ) {
    alert("Please fill in all sections.");
  } else {
    let fnameOutput = document.getElementById("fnameOutput");
    let lnameOutput = document.getElementById("lnameOutput");
    let emailAddressOutput = document.getElementById("emailAddressOutput");
    let phoneNumberOutput = document.getElementById("phoneNumberOutput");

    fnameOutput.innerHTML = fname;
    lnameOutput.innerHTML = lname;
    emailAddressOutput.innerHTML = emailAddress;
    phoneNumberOutput.innerHTML = phoneNumber;
  }
});

function addNewEmailInput() {
  const newEmailAddressInputLabel = document.createElement("label");
  newEmailAddressInputLabel.for = "newEmailAddressInput";
  newEmailAddressInputLabel.innerHTML = "Email Address: ";
  const newEmailAddressInput = document.createElement("input");
  newEmailAddressInput.name = "newEmailAddressInput";
  newEmailAddressInput.type = "email";
  newEmailAddressInput.className = "newEmailAddressInput";
  newEmailAddressInput.id = "newEmailAddressInput";

// store p in a variable and use a for loop for localStorage.

  let emailInputFields = document.getElementsByClassName(
    "newEmailAddressInput"
  );
  if (emailInputFields.length <= 2) {
    document
      .getElementById("newEmailAddressInputHere")
      .appendChild(newEmailAddressInputLabel);
    document
      .getElementById("newEmailAddressInputHere")
      .appendChild(newEmailAddressInput);

    const newEmailAddressOutput = document.createElement("p");
    newEmailAddressOutput.className = "newEmailAddressOutput";
    newEmailAddressOutput.id = "newEmailAddressOutput";
    // newEmailAddressOutput.innerHTML = "Email Address";
    document
      .getElementById("newEmailAddressOutputHere")
      .appendChild(newEmailAddressOutput);

    let input2 = document.getElementById("submit");
    input2.addEventListener("click", (e) => {
      let newEmailAddress = newEmailAddressInput.value;
      newEmailAddressOutput.innerHTML = newEmailAddress;
    });
  } else {
    alert("Please limit to three.");
  }
}

function addNewPhoneNumberInput() {
  const newPhoneNumberInputLabel = document.createElement("label");
  newPhoneNumberInputLabel.for = "newPhoneNumberInput";
  newPhoneNumberInputLabel.innerHTML = "Phone Number: ";
  const newPhoneNumberInput = document.createElement("input");
  newPhoneNumberInput.name = "newPhoneNumberInput";
  newPhoneNumberInput.type = "number";
  newPhoneNumberInput.className = "newPhoneNumberInput";
  newPhoneNumberInput.id = "newPhoneNumberInput";

  let phoneNumberInputFields = document.getElementsByClassName(
    "newPhoneNumberInput"
  );
  if (phoneNumberInputFields.length <= 2) {
    document
      .getElementById("newPhoneNumberInputHere")
      .appendChild(newPhoneNumberInputLabel);
    document
      .getElementById("newPhoneNumberInputHere")
      .appendChild(newPhoneNumberInput);

    const newPhoneNumberOutput = document.createElement("p");
    newPhoneNumberOutput.className = "newPhoneNumberOutput";
    newPhoneNumberOutput.id = "newPhoneNumberOutput";
    // newPhoneNumberOutput.innerHTML = "Phone Number";
    document
      .getElementById("newPhoneNumberOutputHere")
      .appendChild(newPhoneNumberOutput);

    let input2 = document.getElementById("submit");
    input2.addEventListener("click", (e) => {
      let newPhoneNumber = newPhoneNumberInput.value;
      newPhoneNumberOutput.innerHTML = newPhoneNumber;
    });
  } else {
    alert("Please limit to three.");
  }
}

function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}

// Function to save input fields to localStorage when user clicks the save button.
// Thus enabling the user to restore their work and continue where they left off.
function saveCV() {
  // Input Fields.
  localStorage.setItem("fnameInputLocalStorage", fnameInput.value);
  localStorage.setItem("lnameInputLocalStorage", lnameInput.value);
  localStorage.setItem("emailAddressInputLocalStorage", emailAddressInput.value);
  localStorage.setItem("phoneNumberInputLocalStorage", phoneNumberInput.value);

  // Output Fields.
  localStorage.setItem("fnameOutputLocalStorage", fnameOutput.innerHTML);
  localStorage.setItem("lnameOutputLocalStorage", lnameOutput.innerHTML);
  localStorage.setItem("emailAddressOutputLocalStorage", emailAddressOutput.innerHTML);
  localStorage.setItem("phoneNumberOutputLocalStorage", phoneNumberOutput.innerHTML);
}

// Input fields are loaded from localStorage on page load.
window.addEventListener("load", () => {
  fnameInput.value = localStorage.getItem("fnameInputLocalStorage") || "";
  lnameInput.value = localStorage.getItem("lnameInputLocalStorage") || "";
  emailAddressInput.value = localStorage.getItem("emailAddressInputLocalStorage") || "";
  phoneNumberInput.value = localStorage.getItem("phoneNumberInputLocalStorage") || "";
});

// Output fields are loaded from localStorage on page load.
window.addEventListener("load", () => {
  document.getElementById("fnameOutput").innerHTML = localStorage.getItem("fnameOutputLocalStorage") || "First Name";
  document.getElementById("lnameOutput").innerHTML = localStorage.getItem("lnameOutputLocalStorage") || "Last Name";
  document.getElementById("emailAddressOutput").innerHTML = localStorage.getItem("emailAddressOutputLocalStorage") || "Email Address";
  document.getElementById("phoneNumberOutput").innerHTML = localStorage.getItem("phoneNumberOutputLocalStorage") || "Phone Number";
});

// For/while loop to automate process?
// Could use .localStorage.length for the key of the key/value pair and then use a for loop to get from localStorage.
// But returning the values to their correct objects would be interrupted by the addition of new fields by the user.
// Therefore I will have to manually return the values to their correct object.

// Function removes all data from local storage, allowing the user to begin again with a new CV.
function clearLocalStorage() {
  localStorage.clear();
}
