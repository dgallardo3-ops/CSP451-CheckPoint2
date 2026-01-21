/**
 * Login form behavior
 * This file handles client-side validation and user feedback.
 * Feature branch: feature/user-authentication
 */

const form = document.getElementById("loginForm");
const message = document.getElementById("message");

// Handle login form submission
form.addEventListener("submit", (event) => {
  // Prevent page reload
  event.preventDefault();

  // Get user input values
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Reset message state before validating
  message.textContent = "";
  message.className = "muted";

  // Validate email field
  if (!email) {
    showError("Email is required.");
    return;
  }

  // Validate password length
  if (password.length < 6) {
    showError("Password must be at least 6 characters long.");
    return;
  }

  // If all validation passes
  showSuccess("Login submitted (stub). Authentication will be added later.");
});

/**
 * Display an error message to the user
 */
function showError(text) {
  message.textContent = text;
  message.className = "error";
}

/**
 * Display a success message to the user
 */
function showSuccess(text) {
  message.textContent = text;
  message.className = "success";
}
