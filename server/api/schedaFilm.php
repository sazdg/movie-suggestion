<?php
session_start();
require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

$filmScelto = $_GET["titolo"];
$filmScelto = htmlspecialchars(strip_tags($filmScelto));

//visualizza la scheda del film
$query = "SELECT * FROM movies WHERE title = ?";
$result = $db->prepare($query);
$result->bindParam(1, $filmScelto);
$result->execute();

$esiste = $result->rowCount();
if($esiste == 1){
    while($x = $result->fetch(PDO::FETCH_ASSOC)){
        $movie = array(
            "titolo" => $x["title"],
            "anno" => $x["year"],
            "genere" => $x["genre"],
            "mood" => $x["mood"],
            "rating" => $x["rating"]
        );
    }

    echo json_encode($movie);
} else {
    echo json_encode("film non trovato :(");
}


?>