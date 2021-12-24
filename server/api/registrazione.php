<?php
include("../data/Database.php");
$database = new Database();
$db = $database->connessione();

$datiReg = json_decode(file_get_contents("php://input"));

$query = "INSERT INTO utente (nome, password, email) VALUES (:n, :e, :p)";
$result = $db->prepare($query);
$result->execute([
    "n" => $datiReg->nome,
    "e" => $datiReg->email,
    "p" => $datiReg->password 
]);

if($result == true){
    echo json_encode(array("message" => "fatto"));
} else {
    echo json_encode(array("message" => "non fatto"));
}
?>