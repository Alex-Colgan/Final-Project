document.getElementById("submit").addEventListener("click", (e) => {
  if (
    fnameInput.value === "" ||
    lnameInput.value === "" ||
    emailAddressInput.value === "" ||
    phoneNumberInput.value === ""
  ) {
    alert("Please fill in all sections.");
  } else {
    fnameOutput.innerHTML = fnameInput.value;
    lnameOutput.innerHTML = lnameInput.value;
    emailAddressOutput.innerHTML = emailAddressInput.value;
    phoneNumberOutput.innerHTML = phoneNumberInput.value;
    newEmailAddressOutput.innerHTML = newEmailAddressInput.value;
    newPhoneNumberOutput.innerHTML = newPhoneNumberInput.value;
  }
});

document.getElementById("submit3").addEventListener("click", (e) => {
  if (jobTitle1Input.value === "" || jobDuties1Input.value === "") {
    alert("Please fill in at least one previous role.");
  } else {
    jobTitle1Output.innerHTML = jobTitle1Input.value;
    jobDuties1Output.innerHTML = jobDuties1Input.value;
    jobTitle2Output.innerHTML = jobTitle2Input.value;
    jobDuties2Output.innerHTML = jobDuties2Input.value;
  }
});

document.getElementById("submit4").addEventListener("click", (e) => {
  if (
    educationLevel1Input.value === "" ||
    educationResults1Input.value === "" ||
    educationLocation1Input.value === "" ||
    educationDates1Input.value === ""
  ) {
    alert("Please fill in at least one previous education section.");
  } else {
    educationLevel1Output.innerHTML = educationLevel1Input.value;
    educationResults1Output.innerHTML = educationResults1Input.value;
    educationLocation1Output.innerHTML = educationLocation1Input.value;
    educationDates1Output.innerHTML = educationDates1Input.value;
    educationLevel2Output.innerHTML = educationLevel2Input.value;
    educationResults2Output.innerHTML = educationResults2Input.value;
    educationLocation2Output.innerHTML = educationLocation2Input.value;
    educationDates2Output.innerHTML = educationDates2Input.value;
  }
});

document.getElementById("submit5").addEventListener("click", (e) => {
  if (personalProfileDescriptionInput.value === "") {
    alert("Please write a personal profile description.");
  } else {
    personalProfileDescriptionOutput.innerHTML =
    personalProfileDescriptionInput.value;
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

  let emailInputFields = document.getElementsByClassName("newEmailAddressInput");
  if (emailInputFields.length <= 0) {
    document.getElementById("newEmailAddressInputHere").appendChild(newEmailAddressInputLabel);
    document.getElementById("newEmailAddressInputHere").appendChild(newEmailAddressInput);

    const newEmailAddressOutput = document.createElement("p");
    newEmailAddressOutput.className = "newEmailAddressOutput";
    newEmailAddressOutput.id = "newEmailAddressOutput";
    document.getElementById("newEmailAddressOutputHere").appendChild(newEmailAddressOutput);
  } else {
    alert("Please limit to one additional email address.");
  }
}

function addNewPhoneNumberInput() {
  const newPhoneNumberInputLabel = document.createElement("label");
  newPhoneNumberInputLabel.for = "newPhoneNumberInput";
  newPhoneNumberInputLabel.innerHTML = "Phone Number: ";
  const newPhoneNumberInput = document.createElement("input");
  newPhoneNumberInput.name = "newPhoneNumberInput";
  newPhoneNumberInput.type = "tel";
  newPhoneNumberInput.className = "newPhoneNumberInput";
  newPhoneNumberInput.id = "newPhoneNumberInput";

  let phoneNumberInputFields = document.getElementsByClassName("newPhoneNumberInput");
  if (phoneNumberInputFields.length <= 0) {
    document.getElementById("newPhoneNumberInputHere").appendChild(newPhoneNumberInputLabel);
    document.getElementById("newPhoneNumberInputHere").appendChild(newPhoneNumberInput);

    const newPhoneNumberOutput = document.createElement("p");
    newPhoneNumberOutput.className = "newPhoneNumberOutput";
    newPhoneNumberOutput.id = "newPhoneNumberOutput";
    document.getElementById("newPhoneNumberOutputHere").appendChild(newPhoneNumberOutput);
  } else {
    alert("Please limit to one additional phone number.");
  }
}

function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}

function saveCV() {

  localStorage.setItem("fnameOutputLocalStorage", fnameOutput.innerHTML);
  localStorage.setItem("lnameOutputLocalStorage", lnameOutput.innerHTML);
  localStorage.setItem("emailAddressOutputLocalStorage", emailAddressOutput.innerHTML);
  localStorage.setItem("phoneNumberOutputLocalStorage", phoneNumberOutput.innerHTML);

  localStorage.setItem("newEmailAddressOutputLocalStorage", newEmailAddressOutput.innerHTML);
  localStorage.setItem("newPhoneNumberOutputLocalStorage", newPhoneNumberOutput.innerHTML);

  localStorage.setItem("jobTitle1OutputLocalStorage", jobTitle1Output.innerHTML);
  localStorage.setItem("jobDuties1OutputLocalStorage", jobDuties1Output.innerHTML);
  localStorage.setItem("jobTitle2OutputLocalStorage", jobTitle2Output.innerHTML);
  localStorage.setItem("jobDuties2OutputLocalStorage", jobDuties2Output.innerHTML);

  localStorage.setItem("educationLevel1OutputLocalStorage", educationLevel1Output.innerHTML);
  localStorage.setItem("educationResults1OutputLocalStorage", educationResults1Output.innerHTML);
  localStorage.setItem("educationLocation1OutputLocalStorage", educationLocation1Output.innerHTML);
  localStorage.setItem("educationDates1OutputLocalStorage", educationDates1Output.innerHTML);
  localStorage.setItem("educationLevel2OutputLocalStorage", educationLevel2Output.innerHTML);
  localStorage.setItem("educationResults2OutputLocalStorage", educationResults2Output.innerHTML);
  localStorage.setItem("educationLocation2OutputLocalStorage", educationLocation2Output.innerHTML);
  localStorage.setItem("educationDates2OutputLocalStorage", educationDates2Output.innerHTML);

  localStorage.setItem("personalProfileDescriptionOutputLocalStorage", personalProfileDescriptionOutput.innerHTML);
}

window.addEventListener("load", () => {
  document.getElementById("fnameOutput").innerHTML = localStorage.getItem("fnameOutputLocalStorage") || "First Name";
  document.getElementById("lnameOutput").innerHTML = localStorage.getItem("lnameOutputLocalStorage") || "Last Name";
  document.getElementById("emailAddressOutput").innerHTML = localStorage.getItem("emailAddressOutputLocalStorage") || "Email Address";
  document.getElementById("phoneNumberOutput").innerHTML = localStorage.getItem("phoneNumberOutputLocalStorage") || "Phone Number";

  document.getElementById("newEmailAddressOutput").innerHTML = localStorage.getItem("newEmailAddressOutputLocalStorage") || "";
  document.getElementById("newPhoneNumberOutput").innerHTML = localStorage.getItem("newPhoneNumberOutputLocalStorage") || "";

  document.getElementById("jobTitle1Output").innerHTML = localStorage.getItem("jobTitle1OutputLocalStorage") || "Job Title";
  document.getElementById("jobDuties1Output").innerHTML = localStorage.getItem("jobDuties1OutputLocalStorage") || "Duties";
  document.getElementById("jobTitle2Output").innerHTML = localStorage.getItem("jobTitle2OutputLocalStorage") || "";
  document.getElementById("jobDuties2Output").innerHTML = localStorage.getItem("jobDuties2OutputLocalStorage") || "";

  document.getElementById("educationLevel1Output").innerHTML = localStorage.getItem("educationLevel1OutputLocalStorage") || "Education Level";
  document.getElementById("educationResults1Output").innerHTML = localStorage.getItem("educationResults1OutputLocalStorage") || "Results";
  document.getElementById("educationLocation1Output").innerHTML = localStorage.getItem("educationLocation1OutputLocalStorage") || "Institution";
  document.getElementById("educationDates1Output").innerHTML = localStorage.getItem("educationDates1OutputLocalStorage") || "Dates";
  document.getElementById("educationLevel2Output").innerHTML = localStorage.getItem("educationLevel2OutputLocalStorage") || "";
  document.getElementById("educationResults2Output").innerHTML = localStorage.getItem("educationResults2OutputLocalStorage") || "";
  document.getElementById("educationLocation2Output").innerHTML = localStorage.getItem("educationLocation2OutputLocalStorage") || "";
  document.getElementById("educationDates2Output").innerHTML = localStorage.getItem("educationDates2OutputLocalStorage") || "";

  document.getElementById("personalProfileDescriptionOutput").innerHTML = localStorage.getItem("personalProfileDescriptionOutputLocalStorage") || "Description";
});

if (localStorage.getItem("newEmailAddressOutputLocalStorage") !== null) {
  const newEmailAddressInputLabel = document.createElement("label");
  newEmailAddressInputLabel.for = "newEmailAddressInput";
  newEmailAddressInputLabel.innerHTML = "Email Address: ";
  const newEmailAddressInput = document.createElement("input");
  newEmailAddressInput.name = "newEmailAddressInput";
  newEmailAddressInput.type = "email";
  newEmailAddressInput.className = "newEmailAddressInput";
  newEmailAddressInput.id = "newEmailAddressInput";

  document.getElementById("newEmailAddressInputHere").appendChild(newEmailAddressInputLabel);
  document.getElementById("newEmailAddressInputHere").appendChild(newEmailAddressInput);

  const newEmailAddressOutput = document.createElement("p");
  newEmailAddressOutput.className = "newEmailAddressOutput";
  newEmailAddressOutput.id = "newEmailAddressOutput";

  document.getElementById("newEmailAddressOutputHere").appendChild(newEmailAddressOutput);
}

if (localStorage.getItem("newPhoneNumberOutputLocalStorage") !== null) {
  const newPhoneNumberInputLabel = document.createElement("label");
  newPhoneNumberInputLabel.for = "newPhoneNumberInput";
  newPhoneNumberInputLabel.innerHTML = "Phone Number: ";
  const newPhoneNumberInput = document.createElement("input");
  newPhoneNumberInput.name = "newPhoneNumberInput";
  newPhoneNumberInput.type = "tel";
  newPhoneNumberInput.className = "newPhoneNumberInput";
  newPhoneNumberInput.id = "newPhoneNumberInput";

  document.getElementById("newPhoneNumberInputHere").appendChild(newPhoneNumberInputLabel);
  document.getElementById("newPhoneNumberInputHere").appendChild(newPhoneNumberInput);

  const newPhoneNumberOutput = document.createElement("p");
  newPhoneNumberOutput.className = "newPhoneNumberOutput";
  newPhoneNumberOutput.id = "newPhoneNumberOutput";

  document
    .getElementById("newPhoneNumberOutputHere")
    .appendChild(newPhoneNumberOutput);
}

function clearLocalStorage() {
  localStorage.clear();
}