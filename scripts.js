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

  const newEmailAddressOutput = document.createElement("p");
  newEmailAddressOutput.className = "newEmailAddressOutput";
  newEmailAddressOutput.id = "newEmailAddressOutput";
  document
    .getElementById("emailAddressOutput")
    .appendChild(newEmailAddressOutput);

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
    let input2 = document.getElementById("submit");
    input2.addEventListener("click", (e) => {
      emailAddress = newEmailAddressInput.value;
      newEmailAddressOutput.innerHTML = emailAddress;
    });
  } else {
    alert("Please limit to three.");
  }
}

//const newEmailAddressInputSubmit = document.createElement("button");
//newEmailAddressInputSubmit.type = "button";
//newEmailAddressInputSubmit.className =

//const newEmailAddressOutput = document.createElement("p");
//newEmailAddressOutput.className = "newEmailAddressOutput";
//newEmailAddressOutput.id = "newEmailAddressOutput";
//document.getElementById("emailAddressOutput").appendChild(newEmailAddressOutput);

//document.getElementById('log').innerHTML += '<br>Some new content!';
//document.getElementById('log').innerHTML = "text";
//document.getElementById('log').innerText = "text";
//document.getElementById('log').textContent = "text";
