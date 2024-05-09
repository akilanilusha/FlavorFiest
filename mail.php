<?php

print("mail");
die;
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$email ="akilanilusha89@gmail.com";
try {
    $mail->IsSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'flavorfiestmatara@gmail.com';
    $mail->Password = 'sbkt dywb umwc lupc';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('flavorfiestmatara@gmail.com', 'Reset Password');
    $mail->addReplyTo('flavorfiestmatara@gmail.com', 'Reset Password');
    $mail->addAddress($email);
    $mail->isHTML(true);
    $mail->Subject = 'eShop Forgot Password Verification Code';
    $bodyContent = '<h1 style="color:green">Your Verification code is ' . $code . '</h1>';
    $mail->Body    = $bodyContent;
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
