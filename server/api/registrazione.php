<?php
require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

//dati POST
$datiReg = json_decode(file_get_contents("php://input"));

$query = "INSERT INTO utente (nome, password, email) VALUES (:n, :p, :e)";
$result = $db->prepare($query);
$result->execute([
    "n" => $datiReg->nome,
    "e" => $datiReg->email,
    "p" => $datiReg->password 
]);

if($result == true){
    echo json_encode(array("message" => "Registrazione completata con successo!"));
} else {
    echo json_encode(array("message" => "Registrazione non riuscita, riprova"));
}
?>