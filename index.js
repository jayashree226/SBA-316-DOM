// document.title =
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// const emailInputError = document.getElementById('emailError');
// const passwordInputError = document.getElementById('passwordError');

// emailInputError.textContent = "Password input error";
// passwordInputError.textContent = "password input error";
const signin = document.getElementById("signin");
signin.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();

    function isValidEmail(email) {
      // Very basic email validation
      const em = /\S+@\S+\.\S+/;
      return em.test(email);
    }

    // Email validation
    if (!emailInput.value.includes("@")) {
      // const popup=""
      window.alert("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (passwordInput.value.length < 8) {
      passwordError.textContent =
        "Password must be at least 8 characters long.";
      return;
    }

    // If validation success
    else{
    showMessage("Form submitted successfully", "success");
    form.reset();
  }},
  function showMessage(messageText, className) {
    message.textContent = messageText;
    message.className = className;
    window.alert(message)
  }
);
