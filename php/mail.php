<?php

	$recipient = "grayson.croom@gmail.com";

	$name = $_POST['name'];
	$email = $_POST['email'];
	$topic = $_POST['topic'];
	$message = $_POST['message'];
	$formcontent="From: $name \n Message: $message";
	$subject = "Contact Form: $topic";
	$mailheader = "From: $email \r\n";

	mail($recipient, $subject, $formcontent, $mailheader);
	mail($email. "Form Submision Notice", "Your information request has been sucessfully sent!", $mailheader);


	header('Location: ../index.html#bts');
?>
