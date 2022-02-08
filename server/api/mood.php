<?php
session_start();

require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

$mood = $_GET["mood"];

$query = "SELECT * FROM movies WHERE mood = ?";
$result = $db->prepare($query);
$result->bindParam(1, $mood);
$result->execute();

$esiste = $result->rowCount();
$lista = array();
$lista["message"] = $mood;
$lista["film"] = array();


if($esiste >= 1){
    while($x = $result->fetch(PDO::FETCH_ASSOC)){
        $film = array(
            "titolo" => $x["title"],
            "anno" => $x["year"],
            "genere" => $x["genre"],
            "mood" => $x["mood"],
            "rating" => $x["rating"]
        );
        array_push($lista["film"], $x);
    }

    echo json_encode($lista);

} else {
    echo json_encode(array("message" => "errore in mood.php"));
}

?>