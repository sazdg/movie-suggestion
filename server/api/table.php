<?php
include("../data/Database.php");
$database = new Database();
$db = $database->connessione();

$query = "SELECT * FROM movies";
$result = $db->prepare($query);
$result->execute();

if($result == true){
    //creare un array per la risposta in json
    $resp = array();

    //creare resp.message per un testo di risposta
    $resp["message"] = "funziona table.php";
    //creare resp.movie per inserire tutti le righe
    $resp["movie"] = array();
    //trasferire i dati in un json
    while($riga = $result->fetch(PDO::FETCH_ASSOC)){
        $film = array(
            "titolo" => $riga["title"],
            "anno" => $riga["year"],
            "genere" => $riga["genre"],
            "mood" => $riga["mood"],
            "rating" => $riga["rating"],
        );
        //inserire il film nell'array con tutti i film
        array_push($resp["movie"], $film);
    }
    //mandare la risposta unica
    echo json_encode($resp);

} else {
    echo json_encode(array("message" => "non funziona table.php"));
}
?>