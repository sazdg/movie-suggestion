$(document).ready(function(){

    var home = `
    <div class="container-fluid" id="cerca">
        <input type="text" placeholder="Cerca un film">
        <input type="submit" class="btn btn-primary" value="Send query" id="sendQuery>
    </div>

    <div class="container-fluid" id="mood">
        <h3>MOODS</h3>
        <p>Choose one to see the list of movies we have for you</p>
    
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="button" id="b-intense">Intense</button>
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="button" id="b-thrilling">Thrilling</button>
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="button" id="b-romantic">Romantic</button>
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="button" id="b-touching">Touching</button>
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="button" id="b-thought-provoking">Thought-provoking</button>
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="button" id="b-funny">Funnny</button>
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="button" id="b-blow">Blow-minding</button>
    </div>
    
    <div class="container-fluid" id="carousel">
        <h3>Here's your history</h3>
        <p id="history">NULL</p>
    </div>
    <div class="containers">
        <a href="./index.html">Vai alla home page</a>
    </div>
    <div class="containers">
        <button type="button" id="logout">FAI IL LOGOUT</button>
    </div>`;

    $("#titolo-u").html(home);

    /*
    dopo esserti autenticato > login.php > response home.js
    scegli il mood e invia per ricevere una lista dei film
    carosello con i film già consigliati > $_SESSION[]

    chiamata ajax per controllare se c'e qualcosa nella sessione
    chiamata ajax quando clicca su un mood
    
    $(document).on("click", ".btn-outline-primary", function() {

        $.ajax({
            url: "http://localhost/cime/movie-suggestion/server/api/mood.php",
            type="POST",
            contentType: "application/json",
            dataType: "json",
            data: moodJson
        })
        .done(function(response){
            console.log(response.message);
        })
        .fail(function(xhr, resp, text){
            console.log(text);
        });
        return false;
    });
    */
})