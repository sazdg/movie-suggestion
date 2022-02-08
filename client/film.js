$(document).ready(function(){

});

function showFilm(film) {

    $.ajax({
        url:"http://localhost/cime/movie-suggestion/server/api/schedaFilm.php?titolo=" + film,
        type:"GET",
        contentType:"application/json",
        dataType:"json"
    })
    .done(function(response){
        var x = `<div class="container">
        <h3>` + response.titolo + `</h3>
        <p>Anno di uscita: ` + response.anno + `</p><br/>
        <p>Genere del film: ` + response.genere + `</p><br/>
        <p>Mood: ` + response.mood + `</p><br/>
        <p>Giudizio finale: ` + response.rating + `</p><br/>
        
        <button type="button" class="btn btn-outline-primary" onclick="showHome()">Indietro</button>
        </div>`;
        
        $("#titolo-u").html(x)
    })
    .fail(function(xhr, resp, text){
        console.log("failfail film.js");
    });

};
