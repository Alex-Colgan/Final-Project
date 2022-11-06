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
