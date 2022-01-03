$(document).ready(function(){

    var home = `
    <div class="container-fluid d-flex justify-content-center border border-white rounded p-3" id="cerca">
    <form id="find">
        <input type="text" name="valore" id="valore" placeholder="Cerca un film">
        <input type="submit" class="btn btn-primary" value="Search" id="sendQuery">
    </form>
    <br>
    <div id="queryFilm"></div>

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
    */
    
    
    $(document).on("click", ".btn-outline-info", function() {

        var mood = $(this).attr("data-name");
        console.log(mood);

        $.ajax({
            url:"http://localhost/cime/movie-suggestion/server/api/mood.php?mood=" + mood,
            type:"GET",
            dataType: "json",
        })
        .done(function(response){
            console.log("risposta json: " + response.message);
            var risp = "<div><ul class='list-group list-group-flush'>";
            for(let i = 0; i < response.film.length; i++){
                
                risp += "<li class='list-group-item'>" + response.film[i].title + "</li>";
                
            }
            risp += "</ul></div>";
            $("#listafilm").html(risp);
            
        })
        .fail(function(xhr, resp, text){
            console.log(text);
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

                risposta += "<li class='list-group-item'>" + response.film[i].titolo + " " + response.film[i].rating + "</li>";

            }
            risposta += "</ul></div>";
            $("#queryFilm").html(risposta);
        })
        .fail(function(xhr, resp, text){
            console.log("errore in ajax home.js - click send query " + text);
        });
        return false;
    })
    
})