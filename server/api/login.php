<?php
session_start();
$infosessione = session_status();

if(!isset($_SESSION["nome"])){

    //se non esiste sessione, fare il login
    require("../data/Database.php");
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
        
        $_SESSION["nome"] = $datilogin->nome;
        $_SESSION["filmVisitati"] = array();
        
        echo json_encode(array("message" => $datilogin->nome, "esiste" => true, "utente" => $datilogin->nome, "infosessione" => $infosessione));
    } else {
        echo json_encode(array("message" => "Non sei registrato..." . $datilogin->nome . "...", "esiste" => false));
    }
} else {
    echo json_encode(array("message" => $_SESSION["nome"], "esiste" => true, "utente" => $_SESSION["nome"], "infosessione" => $infosessione));
}


?>