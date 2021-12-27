$(document).ready(function () {

    var bodyAmm = `
    <div class="container-fluid">
        <h3>Aggiungi un nuovo film</h3>
        <form id="newMovie">
            Titolo:<br/>
            <input type="text" name="titolo" id="titolo"><br/>
            Anno:<br />
            <input type="number" name="anno" id="anno"> <br />
            Genere:<br />
            <input type="text" name="genere" id="genere"><br />
            Mood:<br />
            <input type="text" name="mood" id="mood"><br />
            Rating:<br />
            <input type="number" name="rating" id="rating" step="0.1"><br/>
            <input type="submit" class="btn btn-primary" value="Invia al DB">
        </form>
        <div id="newResp"></div>

        <h3>ELenco dei film <br/></h3>
        <div id="deleteResp"></div>
        <div class="container-fluid" id="table"></div>
        
    </div>
    <div class="containers">
        <a href="./index.html">Vai alla home page</a>
    </div>
    <div class="container-fluid">
        <button type="button" id="logout">FAI IL LOGOUT</button>
    </div>`;

    //appena carica amm.js si importa la tabella
    $("#titolo-a").html(bodyAmm);
    import("./tableMovies.js");

    //chiamata ajax per creare un film
    $(document).on("submit", "#newMovie", function () {
        var titolo = $("#titolo").val();
        var anno = $("#anno").val();
        var genere = $("#genere").val();
        var mood = $("#mood").val();
        var rating = $("#rating").val();

        $.ajax({
            url: "http://localhost/cime/movie-suggestion/server/api/newMovie.php?titolo=" + titolo + "&anno=" + anno + "&genere=" + genere + "&mood=" + mood + "&rating=" + rating,
            type: "GET",
            dataType: "json"
        })
            .done(function (response) {
                var x = "<p>" + response.message + "</p>";
                $("#newResp").html(x);
            })
            .fail(function (xhr, resp, text) {
                console.log(txt);
                $("#newResp").html(text);
            });
        return false;
    });

    //chiamata ajax per eliminare un film
    //tabella con le cose da eliminare
    $(document).on("click", "#deleteMovie", function () {
        var title = $(this).attr("data-title");

        $.ajax({
            url: "http://localhost/cime/movie-suggestion/server/api/deleteMovie.php?titolo=" + title,
            type: "DELETE",
            dataType: "json"
        })
            .done(function (response) {
                var x = "<p>" + response.message + "</p>";
                $("#deleteResp").html(x);
            })
            .fail(function (xhr, resp, text) {
                console.log(txt);
                $("#deleteResp").html(text);
            });
        return false;
    });
})