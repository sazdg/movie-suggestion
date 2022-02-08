<?php
session_start();
require("../data/Database.php");
$database = new Database();
$db = $database->connessione();

$title = $_GET["titolo"];

$query = "DELETE FROM movies WHERE title = ?";
$result = $db->prepare($query);
$result->bindParam(1, $title);
$result->execute();

if($result == true){
    echo json_encode(array("message" => "il film " . $title . "è stato eliminato"));
} else {
    echo json_encode(array("message"=> "errore in delete.php"));
}
?>