<?php
//LOAD WITH THE PAGE
session_start();

//lunghezza della sessione, quante voci selezionate
$lungh = count($_SESSION["filmVisitati"]);
$listafilm = array();

    for($i = 0; $i < $lungh; $i++){
        array_push($listafilm, $_SESSION["filmVisitati"][$i]);
    }

echo json_encode($listafilm);

?>