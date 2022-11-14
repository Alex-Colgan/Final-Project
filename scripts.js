// Creating a variable for, and adding an event listener for the submit button in the personal information section of the form.
let input1 = document.getElementById("submit");
input1.addEventListener("click", (e) => {
  // Taking all the user inputs from the form and adding them to variables.
  let fname = fnameInput.value;
  let lname = lnameInput.value;
  let emailAddress = emailAddressInput.value;
  let phoneNumber = phoneNumberInput.value;

  // if else statement to ensure there is no missing information in the form.
  // If any form field is empty then an alert will trigger asking the user to fill in all sections.
  if (
    fname === "" ||
    lname === "" ||
    emailAddress === "" ||
    phoneNumber === ""
  ) {
    alert("Please fill in all sections.");
  } else {
    // Assigning the output fields to variables.
    let fnameOutput = document.getElementById("fnameOutput");
    let lnameOutput = document.getElementById("lnameOutput");
    let emailAddressOutput = document.getElementById("emailAddressOutput");
    let phoneNumberOutput = document.getElementById("phoneNumberOutput");

    // Displaying the form information in the CV display section.
    fnameOutput.innerHTML = fname;
    lnameOutput.innerHTML = lname;
    emailAddressOutput.innerHTML = emailAddress;
    phoneNumberOutput.innerHTML = phoneNumber;
  }
});

// When the relevant button is clicked this function adds an additional input and output field for emails.
// If the user has more than one email address they can now add and display multiple email addresses on their CV.
function addNewEmailInput() {
  // Creating the new form input fields using JavaScript.
  const newEmailAddressInputLabel = document.createElement("label");
  newEmailAddressInputLabel.for = "newEmailAddressInput";
  newEmailAddressInputLabel.innerHTML = "Email Address: ";
  const newEmailAddressInput = document.createElement("input");
  newEmailAddressInput.name = "newEmailAddressInput";
  newEmailAddressInput.type = "email";
  newEmailAddressInput.className = "newEmailAddressInput";
  newEmailAddressInput.id = "newEmailAddressInput";

  // if else statement used to prevent user from infinitely adding email fields.
  // Asigned the input fields to a new variable for use in the if else statement.
  // If the user tries to add more than four emails an alert will trigger and inform the user of the limit.
  let emailInputFields = document.getElementsByClassName(
    "newEmailAddressInput"
  );

  // if statement's condition is the number of new email input fields.
  if (emailInputFields.length <= 0) {
    // Adding new fields to the proper location in the form.
    document
      .getElementById("newEmailAddressInputHere")
      .appendChild(newEmailAddressInputLabel);
    document
      .getElementById("newEmailAddressInputHere")
      .appendChild(newEmailAddressInput);

    //Creating new output elements with JavaScript and adding them to the proper location in the CV display section.
    const newEmailAddressOutput = document.createElement("p");
    newEmailAddressOutput.className = "newEmailAddressOutput";
    newEmailAddressOutput.id = "newEmailAddressOutput";
    // newEmailAddressOutput.innerHTML = "Email Address";
    document
      .getElementById("newEmailAddressOutputHere")
      .appendChild(newEmailAddressOutput);

    // Now that new fields have been created we use another event listener to the submit button of the personal information form section.
    // On click the email address input fields are displayed in the CV display section using the elements we created earlier in the function.
    let input2 = document.getElementById("submit");
    input2.addEventListener("click", (e) => {
      let newEmailAddress = newEmailAddressInput.value;
      newEmailAddressOutput.innerHTML = newEmailAddress;
      console.log(newEmailAddressOutput);
    });
  } else {
    alert("Please limit to one additional email address.");
  }
}

// This function follows the same pattern as the addNewEmailInput() function above. Please see above for comments.
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
  if (phoneNumberInputFields.length <= 0) {
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
    alert("Please limit to one additional phone number.");
  }
}

// Function to print only the printable area <div>.
// This allows the user to print a properly formatted CV without leaving the input form and buttons etc. on the final printout.
// Parameter of the function is the id of the <div>. This would allow us to print any <div> if necessary.
function printDiv(divName) {
  // This adds the HTML content of the <div> to a variable.
  var printContents = document.getElementById(divName).innerHTML;
  // This adds the HTML content of the main body of the webpage to a variable.
  var originalContents = document.body.innerHTML;
  // Temporarily replace the body of the webpage with only the contents we want to print.
  document.body.innerHTML = printContents;
  // Prints the current page.
  window.print();
  // Restores the original content to the webpage.
  document.body.innerHTML = originalContents;
}

// Function to save input fields and the CV display to localStorage when user clicks the save button.
// Thus enabling the user to restore their work when they reload the page and continue where they left off.
function saveCV() {
  // localStorage uses a key/value pair system. Here we initialise the key and value for all the relevant fields.

  // Input Fields.
  localStorage.setItem("fnameInputLocalStorage", fnameInput.value);
  localStorage.setItem("lnameInputLocalStorage", lnameInput.value);
  localStorage.setItem(
    "emailAddressInputLocalStorage",
    emailAddressInput.value
  );
  localStorage.setItem("phoneNumberInputLocalStorage", phoneNumberInput.value);

  // Output Fields.
  localStorage.setItem("fnameOutputLocalStorage", fnameOutput.innerHTML);
  localStorage.setItem("lnameOutputLocalStorage", lnameOutput.innerHTML);
  localStorage.setItem(
    "emailAddressOutputLocalStorage",
    emailAddressOutput.innerHTML
  );
  localStorage.setItem(
    "phoneNumberOutputLocalStorage",
    phoneNumberOutput.innerHTML
  );

  // Newly created input fields.
  localStorage.setItem(
    "newEmailAddressInputLocalStorage",
    newEmailAddressInput.value
  );
  localStorage.setItem(
    "newPhoneNumberInputLocalStorage",
    newPhoneNumberInput.value
  );

  // Newly created output fields.
  localStorage.setItem(
    "newEmailAddressOutputLocalStorage",
    newEmailAddressOutput.innerHTML
  );
  localStorage.setItem(
    "newPhoneNumberOutputLocalStorage",
    newPhoneNumberOutput.innerHTML
  );
}

// Input fields are loaded from localStorage on page load.
window.addEventListener("load", () => {
  fnameInput.value = localStorage.getItem("fnameInputLocalStorage") || "";
  lnameInput.value = localStorage.getItem("lnameInputLocalStorage") || "";
  emailAddressInput.value =
    localStorage.getItem("emailAddressInputLocalStorage") || "";
  phoneNumberInput.value =
    localStorage.getItem("phoneNumberInputLocalStorage") || "";

  // Newly created input fields.
  newEmailAddressInput.value =
    localStorage.getItem("newEmailAddressInputLocalStorage") || "";
  newPhoneNumberInput.value =
    localStorage.getItem("newPhoneNumberInputLocalStorage") || "";
});

// Output fields are loaded from localStorage on page load.
window.addEventListener("load", () => {
  document.getElementById("fnameOutput").innerHTML =
    localStorage.getItem("fnameOutputLocalStorage") || "First Name";
  document.getElementById("lnameOutput").innerHTML =
    localStorage.getItem("lnameOutputLocalStorage") || "Last Name";
  document.getElementById("emailAddressOutput").innerHTML =
    localStorage.getItem("emailAddressOutputLocalStorage") || "Email Address";
  document.getElementById("phoneNumberOutput").innerHTML =
    localStorage.getItem("phoneNumberOutputLocalStorage") || "Phone Number";

  // Newly created output fields.
  document.getElementById("newEmailAddressOutput").innerHTML =
    localStorage.getItem("newEmailAddressOutputLocalStorage") ||
    "Email Address";
  document.getElementById("newPhoneNumberOutput").innerHTML =
    localStorage.getItem("newPhoneNumberOutputLocalStorage") || "Phone Number";
});

// if statements which checks if there is data stored in local storage.
// If localstorage is not empty then it creates and populates the additional email and phone number fields.
if (localStorage.getItem("newEmailAddressInputLocalStorage") !== null) {
  const newEmailAddressInputLabel = document.createElement("label");
  newEmailAddressInputLabel.for = "newEmailAddressInput";
  newEmailAddressInputLabel.innerHTML = "Email Address: ";
  const newEmailAddressInput = document.createElement("input");
  newEmailAddressInput.name = "newEmailAddressInput";
  newEmailAddressInput.type = "email";
  newEmailAddressInput.className = "newEmailAddressInput";
  newEmailAddressInput.id = "newEmailAddressInput";

  document
    .getElementById("newEmailAddressInputHere")
    .appendChild(newEmailAddressInputLabel);
  document
    .getElementById("newEmailAddressInputHere")
    .appendChild(newEmailAddressInput);

  const newEmailAddressOutput = document.createElement("p");
  newEmailAddressOutput.className = "newEmailAddressOutput";
  newEmailAddressOutput.id = "newEmailAddressOutput";

  document
    .getElementById("newEmailAddressOutputHere")
    .appendChild(newEmailAddressOutput);
}

if (localStorage.getItem("newPhoneNumberInputLocalStorage") !== null) {
  const newPhoneNumberInputLabel = document.createElement("label");
  newPhoneNumberInputLabel.for = "newPhoneNumberInput";
  newPhoneNumberInputLabel.innerHTML = "Phone Number: ";
  const newPhoneNumberInput = document.createElement("input");
  newPhoneNumberInput.name = "newPhoneNumberInput";
  newPhoneNumberInput.type = "number";
  newPhoneNumberInput.className = "newPhoneNumberInput";
  newPhoneNumberInput.id = "newPhoneNumberInput";

  document
    .getElementById("newPhoneNumberInputHere")
    .appendChild(newPhoneNumberInputLabel);
  document
    .getElementById("newPhoneNumberInputHere")
    .appendChild(newPhoneNumberInput);

  const newPhoneNumberOutput = document.createElement("p");
  newPhoneNumberOutput.className = "newPhoneNumberOutput";
  newPhoneNumberOutput.id = "newPhoneNumberOutput";

  document
    .getElementById("newPhoneNumberOutputHere")
    .appendChild(newPhoneNumberOutput);
}

// Function removes all data from local storage, allowing the user to begin again with a new CV.
function clearLocalStorage() {
  localStorage.clear();
}

// Can we store p output elements in a variable and use a for loop for localStorage problem?
// For/while loop to automate process?
// Could use .localStorage.length for the key of the key/value pair and then use a for loop to get from localStorage.
// But returning the values to their correct objects would be interrupted by the addition of new fields by the user.
// Therefore I will have to manually return the values to their correct object.

// Could use onChange or onCreate? if it exists instead of onload.
// Or could put the whole function in an if else statement to check against local storage and
// if local storage is present then create the elements and fill them.

// Problem is still storing multiple of a single element value in localStorage.
// Perhaps we could store the values in an array and target each index.

// Could also store in localStorage as an array using this method:
// const myBlogs = ["https://catalins.tech", "https://exampleblog.com"];
// localStorage.setItem('links', JSON.stringify(myBlogs));
// const storedBlogs = JSON.parse(localStorage.getItem('links'));

// Backup plan is to reduce the number of additional fields per type to one.
// Still need to write out the rest of the form and do the CSS styling.
// Would like half a week each on writing the rest of the form and output and writing the CSS.

// Add second email / add third etc. X
// Builder/factory function.
// Use onchange or onblur.
// Class with a constructor.
// Investigate object oriented programming. But time box it. And create a branch from your code on gitHub.

let input3 = document.getElementById("submit3");
input3.addEventListener("click", (e) => {
  let jobTitle1InputVar = jobTitle1Input.value;
  let jobDuties1InputVar = jobDuties1Input.value;
  let jobTitle2InputVar = jobTitle2Input.value;
  let jobDuties2InputVar = jobDuties2Input.value;

  if (jobTitle1InputVar === "" || jobDuties1InputVar === "") {
    alert("Please fill in at least one previous role.");
  } else {
    let jobTitle1OutputVar = document.getElementById("jobTitle1Output");
    let jobDuties1OutputVar = document.getElementById("jobDuties1Output");
    let jobTitle2OutputVar = document.getElementById("jobTitle2Output");
    let jobDuties2OutputVar = document.getElementById("jobDuties2Output");

    jobTitle1OutputVar.innerHTML = jobTitle1InputVar;
    jobDuties1OutputVar.innerHTML = jobDuties1InputVar;
    jobTitle2OutputVar.innerHTML = jobTitle2InputVar;
    jobDuties2OutputVar.innerHTML = jobDuties2InputVar;
  }
});

let input4 = document.getElementById("submit4");
input4.addEventListener("click", (e) => {
  let educationLevel1InputVar = educationLevel1Input.value;
  let educationResults1InputVar = educationResults1Input.value;
  let educationLocation1InputVar = educationLocation1Input.value;
  let educationDates1InputVar = educationDates1Input.value;
  let educationLevel2InputVar = educationLevel2Input.value;
  let educationResults2InputVar = educationResults2Input.value;
  let educationLocation2InputVar = educationLocation2Input.value;
  let educationDates2InputVar = educationDates2Input.value;

  if (
    educationLevel1InputVar === "" ||
    educationResults1InputVar === "" ||
    educationLocation1InputVar === "" ||
    educationDates1InputVar === ""
  ) {
    alert("Please fill in at least one previous education section.");
  } else {
    let educationLevel1OutputVar = document.getElementById(
      "educationLevel1Output"
    );
    let educationResults1OutputVar = document.getElementById(
      "educationResults1Output"
    );
    let educationLocation1OutputVar = document.getElementById(
      "educationLocation1Output"
    );
    let educationDates1OutputVar = document.getElementById(
      "educationDates1Output"
    );
    let educationLevel2OutputVar = document.getElementById(
      "educationLevel2Output"
    );
    let educationResults2OutputVar = document.getElementById(
      "educationResults2Output"
    );
    let educationLocation2OutputVar = document.getElementById(
      "educationLocation2Output"
    );
    let educationDates2OutputVar = document.getElementById(
      "educationDates2Output"
    );

    educationLevel1OutputVar.innerHTML = educationLevel1InputVar;
    educationResults1OutputVar.innerHTML = educationResults1InputVar;
    educationLocation1OutputVar.innerHTML = educationLocation1InputVar;
    educationDates1OutputVar.innerHTML = educationDates1InputVar;
    educationLevel2OutputVar.innerHTML = educationLevel2InputVar;
    educationResults2OutputVar.innerHTML = educationResults2InputVar;
    educationLocation2OutputVar.innerHTML = educationLocation2InputVar;
    educationDates2OutputVar.innerHTML = educationDates2InputVar;
  }
});

// let input5 = document.getElementById("submit5");
// input5.addEventListener("click", (e) => {
//   let personalProfileDescriptionInputVar =
//     personalProfileDescriptionInput.value;

//   if (personalProfileDescriptionInputVar === "") {
//     alert("Please add a profile description.");
//   } else {
//     let personalProfileDescriptionOutputVar = document.getElementById(
//       "personalProfileDescriptionOutput"
//     );

//     personalProfileDescriptionOutputVar.innerHTML =
//       personalProfileDescriptionInputVar;
//   }
// });

let input5 = document.getElementById("submit5");
input5.addEventListener("click", (e) => {
  personalProfileDescriptionOutput.innerHTML =
    personalProfileDescriptionInput.value;
});
