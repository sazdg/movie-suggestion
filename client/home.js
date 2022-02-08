$(document).ready(function(){

    showHome(); 


    /*
    dopo esserti autenticato > login.php > response home.js
    scegli il mood e invia per ricevere una lista dei film
    carosello con i film già consigliati > $_SESSION[]

    chiamata ajax per controllare se c'e qualcosa nella sessione
    chiamata ajax quando clicca su un mood
    */
    
    
    $(document).on("click", ".btn-outline-info", function() {

        var mood = $(this).attr("data-name");
        console.log(mood);

        $.ajax({
            url:"http://localhost/cime/movie-suggestion/server/api/mood.php?mood=" + mood,
            type:"GET",
            dataType: "json"
        })
        .done(function(response){
            //console.log("risposta json: " + response.message);
            var risp = "<div><ul class='list-group list-group-flush'>";
            for(let i = 0; i < response.film.length; i++){
                
                risp += "<li class='list-group-item cliccato' data-title='" + response.film[i].title + "'><button type='button'>" + response.film[i].title + "</button></li>";
                
            }
            risp += "</ul></div>";
            $("#listafilm").html(risp);
            
        })
        .fail(function(xhr, resp, text){
            console.log("errorejson");
            console.log(text);
        });
        return false;
    });


    //modificare la variabile di sessione
    $(document).on("click", ".cliccato", function(){
        var film = $(this).attr("data-title");
        valore = film.replace(/\s/g, "+");

        $.ajax({
            url: "http://localhost/cime/movie-suggestion/server/api/history.php?clickFilm=" + valore,
            type: "GET",
            dataType: "json"
        })
            .done(function (response) {
                console.log(response + " click titolo film");
                showFilm(film);
            })
            .fail(function (xhr, resp, text) {
                console.log("errore cliccato home.js " + text);
            });
        return false;
    });


    $(document).on("click", "#sendQuery", function(){

        var cerca = $("#valore").val();

        $.ajax({
            url:"http://localhost/cime/movie-suggestion/server/api/cerca.php?cerca=" + cerca,
            type:"GET",
            dataType:"json"
        })
        .done(function(response){
            console.log(response.message);
            var risposta = "<div><ul class='list-group list-group-flush'>";
            for (let i = 0; i < response.film.length; i++) {

                risposta += "<li class='list-group-item'>" + response.film[i].titolo + " (" + response.film[i].anno + ")</li>";

            }
            risposta += "</ul></div>";
            $("#queryFilm").html(risposta);
        })
        .fail(function(xhr, resp, text){
            console.log("errore in ajax home.js - click send query " + text);
        });
        return false;
    })
    
});

function showHome() {
    var home = `
    <div class="container-fluid d-flex flex-wrap justify-content-center border border-white rounded p-3" id="cerca">
    <div class="container row p-0">
    <form id="find">
        <input type="text" name="valore" id="valore" placeholder="Cerca un film">
        <input type="submit" class="btn btn-primary" value="Search" id="sendQuery">
    </form>
    </div>

    <br>
    <div class="container row p-3 justify-content-center" id="queryFilm">...</div>

    </div><br/>
    <div class="container-fluid border border-white rounded p-3" id="mood">
        <h3>MOODS</h3>
        <p>Choose one to see the list of movies we have for you</p>
    
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" data-name="Intense">Intense</button>
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" data-name="Thrilling">Thrilling</button>
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" data-name="Romantic">Romantic</button>
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" data-name="Touching">Touching</button>
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" data-name="Thought-provoking">Thought-provoking</button>
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" data-name="Funny">Funny</button>
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" data-name="Blow-minding">Blow-minding</button>
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" data-name="Relaxing">Relaxing</button>
    </div><br>
    <div id="listafilm"></div>
<br>
    <div class="container-fluid border border-white rounded p-3" id="carousel">
        <h3>Here's your history</h3>
        <p id="history"></p>
    </div><br/>

    <div class="container d-flex justify-content-center p-5">
        <button type="button" class="btn btn-outline-primary"><a href="./index.html">Vai alla home page</a></button>
        <button type="button" class="btn btn-outline-danger" id="logout">Logout</button></div>`;

    $("#titolo-u").html(home);

    //import("./carosello.js");
    showCarousel();
};