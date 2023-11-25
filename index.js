window.addEventListener("load", function (event) {
  var elements = document.querySelectorAll("img").forEach((item) => {
    item.addEventListener("click", (e) => {
      alertImg(e.target.alt);
    });
  });
  function alertImg(imgName) {
    alert(" This is " + imgName);
  }
});

function onSubmit(event) {
  event.preventDefault();
  const nameLabel = document.querySelector('[for="name"]');
  const nameError = document.querySelector('[for="name"] + .error');
  const nameInput = document.getElementById("name");
  const emailLabel = document.querySelector('[for="email"]');
  const emailError = document.querySelector('[for="email"] + .error');
  const emailInput = document.getElementById("email");
  const numberLabel = document.querySelector('[for="number"]');
  const numberError = document.querySelector('[for="number"] + .error');
  const numberInput = document.getElementById("number");
  const feedbackLabel = document.querySelector('[for="feedback"]');
  const feedbackError = document.querySelector('[for="feedback"] + .error');
  const feedbackInput = document.getElementById("feedback");
  nameLabel.parentElement.classList.remove("active-error");
  emailLabel.parentElement.classList.remove("active-error");
  numberLabel.parentElement.classList.remove("active-error");
  feedbackLabel.parentElement.classList.remove("active-error");
  nameError.textContent = "";
  emailError.textContent = "";
  numberError.textContent = "";
  feedbackError.textContent = "";

  if (!nameInput.value) {
    nameLabel.parentElement.classList.add("active-error");
    nameError.textContent = "Invalid Name";
  }

  if (!emailInput.value) {
    emailLabel.parentElement.classList.add("active-error");
    emailError.textContent = "Invalid Email";
  }

  if (!numberInput.value) {
    numberLabel.parentElement.classList.add("active-error");
    numberError.textContent = "Invalid Number";
  }

  if (!feedbackInput.value) {
    feedbackLabel.parentElement.classList.add("active-error");
    feedbackError.textContent = "Invalid Input";
  }
  if (
    nameInput.value &&
    emailInput.value &&
    numberInput.value &&
    feedbackInput.value
  ) {
    alert("Feedback Submitted");
    nameInput.value = "";
    emailInput.value = "";
    numberInput.value = "";
    feedbackInput.value = "";
  }
}
