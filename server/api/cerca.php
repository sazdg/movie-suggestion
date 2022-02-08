<?php
require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

//per cercare una parola specifica
$valore = "%" . $_GET["cerca"] . "%";

$query = "SELECT * FROM movies WHERE title LIKE :cerca";
$result = $db->prepare($query);
$result->bindParam(":cerca", $valore);
$result->execute();

$lista = array();
$lista["message"] = "all good";
$lista["film"] = array();

$esiste = $result->rowCount();

if($esiste >= 1 ){
    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        $x = array(
            "titolo" => $row["title"],
            "anno" => $row["year"],
            "genere" => $row["genre"],
            "mood" => $row["mood"],
            "rating" => $row["rating"]
        );
        array_push($lista["film"], $x);
    }
    
    echo json_encode($lista);
} else {
    echo json_encode(array("message" => "non ci sono risultati"));
}
?>