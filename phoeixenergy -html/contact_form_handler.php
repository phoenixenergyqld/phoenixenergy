<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Email details
    $to = "admin@phoenixenergyqld.com.au";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";
    $body = "Name: $name\nPhone: $phone\nEmail: $email\n\nMessage:\n$message";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
