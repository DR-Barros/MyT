<?php
$name = $_POST["name"]
$email = $_POST["email"]
$msg = $_POST["mensaje"]
$destinatario = "danielradriganb@gmail.com"
$asunto = "Mensaje de contacto Maquetas y Trenes"
$cuerpo = "$msg"

//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

//dirección del remitente 
$headers .= "From: Maquetas y Trenes <noreply@example.com>\r\n"; 

mail($destinatario, $asunto, $cuerpo, $headers)
?>