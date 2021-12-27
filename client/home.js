$(document).ready(function(){

    var home = `
    <div class="container-fluid d-flex justify-content-center border border-white rounded p-3" id="cerca">
        <input type="text" placeholder="Cerca un film">
        <input type="submit" class="btn btn-primary" value="Search" id="sendQuery">
    </div><br/>
    <div class="container-fluid border border-white rounded p-3" id="mood">
        <h3>MOODS</h3>
        <p>Choose one to see the list of movies we have for you</p>
    
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" id="b-intense">Intense</button>
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" id="b-thrilling">Thrilling</button>
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" id="b-romantic">Romantic</button>
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" id="b-touching">Touching</button>
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" id="b-thought-provoking">Thought-provoking</button>
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" id="b-funny">Funnny</button>
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" id="b-blow">Blow-minding</button>
        <button type="button" class="btn btn-outline-info" data-bs-toggle="button" id="b-chilling">Chilling</button>
    </div><br/>

    <div class="container-fluid border border-white rounded p-3" id="carousel">
        <h3>Here's your history</h3>
        <p id="history">NULL</p>
    </div><br/>

    <div class="container d-flex justify-content-center p-5">
        <button type="button" class="btn btn-outline-info"><a href="./index.html">Vai alla home page</a></button>
        <button type="button" class="btn btn-outline-danger" id="logout">Logout</button></div>`;

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