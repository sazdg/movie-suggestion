<?php
//to ensure you're using the same session
session_start();
//unset($_SESSION["nome"]);
session_destroy();
echo json_encode(array("message" => "Logout avvenuto con successo. Sarai reindirizzato alla home page. Ciao ciao"));
?>