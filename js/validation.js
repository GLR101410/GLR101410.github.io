"use strict";

  document.querySelector('form').addEventListener('submit', function(event) {
    // Get form fields
    const firstName = document.getElementById('first-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const company = document.getElementById('company').value.trim();
    // Regex for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Variable to track errors
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(el) {
      el.remove();
    });

    // Validate First Name
    if (!firstName) {
      showError('first-name', 'First name is required');
      isValid = false;
    }

    // Validate Email
    if (!email) {
      showError('email', 'Email is required');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      showError('email', 'Invalid email format');
      isValid = false;
    }

    // Validate Message
    if (!message) {
      showError('message', 'Message is required');
      isValid = false;
    }

    // Validate Message
    if (!company) {
         showError('company', 'Company is required');
         isValid = false;
    }
    

    // Prevent form submission if validation fails
    if (!isValid) {
      event.preventDefault();
    }
  });

  // Function to show error messages
  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement('p');
    error.classList.add('error-message');
    error.style.color = 'red';
    error.textContent = message;
    field.parentElement.appendChild(error); // Append error message after the input field
  }

