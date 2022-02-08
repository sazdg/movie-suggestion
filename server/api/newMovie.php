<?php
session_start();
require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

$titolo = $_GET["titolo"];
$anno = $_GET["anno"];
$genere = $_GET["genere"];
$mood = $_GET["mood"];
$rating = $_GET["rating"];

//if movie already exists
$ris = $db->query("SELECT * FROM movies WHERE title = '" . $titolo . "'");
//$ris = $db->prepare($q);
//$ris->bindParam(":titolo", $titolo);
//$ris->execute();
$conta = $ris->rowCount();

if($conta == 1){
    echo json_encode(array("message" => "Film già presente nel database!"));

} else {
    $query = "INSERT INTO movies (title, year, genre, mood, rating) VALUES (:t, :y, :g, :m, :r)";
    $result = $db->prepare($query);
    $result->execute([
        "t" => $titolo,
        "y" => $anno,
        "g" => $genere,
        "m" => $mood,
        "r" => $rating
    ]);

    if($result == true){
        echo json_encode(array("message" => "Registrazione del nuovo film avvenuta con successo!"));
    } else {
        echo json_encode(array("message" => "errore in php"));
    }
}



?>