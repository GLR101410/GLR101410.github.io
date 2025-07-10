<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Collect form data
  $name = htmlspecialchars($_POST['name']); // Sanitize input
  $lastname = htmlspecialchars($_POST['lastname']); //Sanitize input
  $company = htmlspecialchars($_POST['company']); // Sanitize input
  $email = htmlspecialchars($_POST['email']); // Sanitize input
  $message = htmlspecialchars($_POST['message']); // Sanitize input

  // Set recipient email address
  $to = "101410@glr.nl"; // Your email address

  // Set email subject
  $subject = "New Contact Form Submission from $lastname $name";

  // Build email content
  $email_content = "Name: $name\n";
  $email_content .= "Lastname: $lastname\n\n";
  $email_content .= "Company: $company\n\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Message:\n$message\n";

  // Set email headers
  $headers = "From: $name <$email>";

  // Send email
  if (mail($to, $subject, $email_content, $headers)) {
    echo "Thank you for contacting! I will get back to you soon.";
  } else {
    echo "Oops! Something went wrong. Please try again later.";
  }
} else {
  echo "Invalid request.";
}
?>