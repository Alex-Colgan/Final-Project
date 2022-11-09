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

    localStorage.setItem("fnameOutputLocalStorage", fnameOutput.innerHTML);
    
  }
});

window.addEventListener("load", () => {
  document.getElementById("fnameOutput").innerHTML = localStorage.getItem("fnameOutputLocalStorage");
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

window.addEventListener("load", () => {
  let fnameInput = document.querySelector("#fnameInput");
  let fnameInputLocalStorage =
    localStorage.getItem("fnameInputLocalStorage") || "";
  fnameInput.value = fnameInputLocalStorage;
  fnameInput.addEventListener("change", (e) => {
    localStorage.setItem("fnameInputLocalStorage", e.target.value);
  });
});
