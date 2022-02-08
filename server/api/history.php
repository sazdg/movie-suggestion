<?php
session_start();
require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

$film = $_GET["clickFilm"];


if($_SESSION["filmVisitati"] == null){

    $_SESSION["filmVisitati"] = array();
    array_push($_SESSION["filmVisitati"], $film);

} else {
    
    array_push($_SESSION["filmVisitati"], $film);
}

echo json_encode($_SESSION["filmVisitati"]);
?>