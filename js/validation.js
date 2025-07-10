"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from actually submitting

    const name = document.getElementById("name").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const company = document.getElementById("company").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const fullName = `${name} ${lastname}`;
    const subject = encodeURIComponent(`Contact Form Submission from ${fullName}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nCompany: ${company}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:101410@glr.nl?subject=${subject}&body=${body}`;
  });
});
