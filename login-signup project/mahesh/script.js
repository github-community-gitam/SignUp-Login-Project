function toggleForm(formType) {
  if (formType === "register") {
    document.getElementById("register-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
  } else {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }
}

// Register User
document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    // Simple email validation
    if (!email.includes("@")) {
      document.getElementById("reg-message").textContent =
        "Please enter a valid email.";
      return;
    }

    // Store user data in localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    document.getElementById("reg-message").textContent =
      "Registration successful!";
    setTimeout(() => toggleForm("login"), 2000); // Switch to login form after 2 seconds
  });

// Login User
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      // Successful login
      document.getElementById("login-message").textContent = "";
      document.getElementById("login-form").style.display = "none";
      document.getElementById("secured-page").style.display = "block";
      document.getElementById(
        "welcome-message"
      ).textContent = `Welcome, ${email}!`;
    } else {
      // Login failure
      document.getElementById("login-message").textContent =
        "Invalid email or password.";
    }
  });

// Logout User
function logout() {
  localStorage.removeItem("email");
  localStorage.removeItem("password");

  document.getElementById("secured-page").style.display = "none";
  toggleForm("login");
}
