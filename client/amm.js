$(document).ready(function () {

    showAmm();

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
                alert(response.message);
                showAmm();
            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
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
});

function showAmm(){
    var bodyAmm = `
    <div class="container-fluid p-3">
        <h3>Aggiungi un nuovo film</h3>
        </div>

        <div class="d-flex justify-content-center border border-white rounded p-3">
        <form id="newMovie">
            <label>Titolo:<br/>
            <input type="text" name="titolo" id="titolo"></label><br/>
            <label>Anno:<br />
            <input type="number" name="anno" id="anno"></label><br />
            <label>Genere:<br />
            <input type="text" name="genere" id="genere"></label><br />

            <label>Mood:<br />
            <select name="mood" id="mood" form="newMovie">
            <option value="Blow-minding">Blow-minding</option>
            <option value="Funny">Funny</option>
            <option value="Intense">Intense</option>
            <option value="Relaxing">Relaxing</option>
            <option value="Romantic">Romantic</option>
            <option value="Thought-provoking">Thought-provoking</option>
            <option value="Thrilling">Thrilling</option>
            <option value="Touching">Touching</option>
            </select><br/>

            <label>Rating:<br />
            <input type="number" name="rating" id="rating" step="0.1"></label><br/>
            <input type="submit" class="btn btn-primary" value="Invia al DB">
        </form>
        </div>

        <div id="newResp"></div>
        <br/>
        <div class="container-fluid p-3">
        <h3>Elenco dei film <br/></h3>
        <div id="deleteResp"></div>
        <div class="container-fluid p-3" id="table"></div>
    </div><br/>

    <div class="container d-flex justify-content-center p-5">
        <button type="button" class="btn btn-outline-primary"><a href="./index.html">Vai alla home page</a></button>
        <button type="button" class="btn btn-outline-danger" id="logout">Logout</button></div>`;

    //appena carica amm.js si importa la tabella
    $("#titolo-a").html(bodyAmm);
    showTable();
}