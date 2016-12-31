<?php

	$name = $_POST['name'];
	$email = $_POST['email'];
	$topic = $_POST['topic'];
	$message = $_POST['message'];
	$formcontent="From: $name \n Message: $message";
	$recipient = "grayson.croom@gmail.com";
	$subject = "Contact Form: $topic";
	$mailheader = "From: $email \r\n";

	mail($recipient, $subject, $formcontent, $mailheader);
	echo "Thank You!";

	header('Location: ../index.html#bts');
?>
