// Output of Max height slider
let slider = document.getElementById("height");
let output = document.getElementById("chosenHeight");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

// Form validation
function isNameValid() {
  let name = document.getElementById("userName").value;
  let regex = /^[a-z]{2,}$/i;
  if (regex.test(name)) {
    document.getElementById("isNameCorrect").innerHTML = "Correct input";
  } else {
    document.getElementById("isNameCorrect").innerHTML = "This field should include only letters";
  }
}

function isTelephoneValid() {
  let phone = document.getElementById("phone").value;
  let regex = /^\d+$/;
  if (regex.test(phone)) {
    document.getElementById("isPhoneCorrect").innerHTML = "Correct input";
  } else {
    document.getElementById("isPhoneCorrect").innerHTML = "This field should include only numbers";
  }
}

function isEmailValid() {
  let email = document.getElementById("email").value;
  let regex = /^(\w\.?)+@[\w\.-]+\.\w{2,4}$/;
  if (regex.test(email)) {
    document.getElementById("isEmailCorrect").innerHTML = "Correct input";
  } else {
    document.getElementById("isEmailCorrect").innerHTML = "This is incorrect email";
  }
}
