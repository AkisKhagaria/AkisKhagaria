// Function to validate form input
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  
    // Clear any previous error messages
    errorMessage.innerHTML = '';
  
    // Simple validation
    if (username === "" || password === "") {
      errorMessage.innerHTML = "Both fields are required!";
      return false;
    }
  
    // Simulate checking credentials (for demonstration purposes)
    var validUsername = "Akis@9304645021";
    var validPassword = "Akis$9304645021";
  
    if (username === validUsername && password === validPassword) {
      // Redirect to another page after successful login
      window.location.href = "index2.html"; // Replace with the desired page URL
      return true; // Form will not submit, as we're redirecting
    } else {
      errorMessage.innerHTML = "Invalid username or password!";
      return false; // Prevent form submission
    }
  }
  