$(document).ready(function(){
    var bodyAmm = `
        <div class="container-fluid">
        <h3>Aggiungi un nuovo film</h3>
        <form method="get">
            Titolo:<br/>
            <input type="text" id="nome"><br/>
            Anno:<br />
            <input type="number" id="anno"> <br />
            Genere:<br />
            <input type="text" id="genere"><br />
            Mood:<br />
            <input type="text" id="mood"><br />
            Rating:<br />
            <input type="number" id="rating"><br/>
            <input type="submit" class="btn btn-primary" id="newMovie" value="Invia al DB">
        </form>
        <h3>Cancella un film</h3>
        <form method="get" >
            <select name="film" id="film">
                <option selected>Open this select menu</option>
                <option value="Il padrino">Il padrino - anno</option>
                <option value="Matrix">Matrix - anno</option>
            </select><br/>
            <input type="submit" class="btn btn-primary" id="deleteMovie" value="Invia al DB">
        </form>
    </div>
    <div class="container-fluid">
        <a href="index.html">Torna alla home</a>
    </div>`;

    $("#titolo-a").append(bodyAmm);
});