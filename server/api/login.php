<?php
include("../data/Database.php");
$database = new Database();
$db = $database->connessione();

$datilogin = json_decode(file_get_contents("php://input"));
//var_dump($datilogin);

$query = "SELECT * FROM utente WHERE nome = ? AND password = ?";
$result = $db->prepare($query);
$result->bindParam(1, $datilogin->nome);
$result->bindParam(2, $datilogin->password);
$result->execute();

$rispostaa = $result->rowCount();
$risp = $result->fetch();

//se esiste nel DBMS
if($rispostaa == 1){
    echo json_encode(array("message" => $datilogin->nome, "esiste" => true, "utente" => $datilogin->nome));
    $_SESSION["nome"] = $datilogin->nome;
} else {
    echo json_encode(array("message" => "<br/>Non sei registrato..." . $datilogin->nome . "...", "esiste" => false));
}

?>