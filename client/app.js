$(document).ready(function () {
    //index app, form di login
    var app = `
    <div class="container">
    <h3>Movie suggestions!!</h3>
            <div class="container-fluid">
                <form>
                    Nome<br />
                    <input type="text" name="nome" id="nome"><br />
                    Password<br />
                    <input type="password" name="password" id="pass"><br />
                    <button type="button" class="btn btn-primary" id="loggati"> Login </button>
                </form>
            </div>
            <div class="container-fluid">
                <p>Registrati per salvare la lista dei tuoi film!</p>
                <button type="button" class="btn btn-primary" id="registrazione"> Vai alla  registrazione </a>
            </div></div>
            <div id="contenuti"></div>`;

    $("#app").html(app);


    //chiamata ajax per fare il login
    $(document).on("click", "#loggati", function () {

        var dati = {
            nome: $("#nome").val(),
            password: $("#pass").val()
        };
        let datiJson = JSON.stringify(dati);

        $.ajax({
            url: "http://localhost/cime/movie-suggestion/server/api/login.php",
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: datiJson
        })
            .done(function (response) {
                if (response.esiste == true) {
                    if (response.utente == "amministratore") {
                        var amm = "<div class='container-fluid' id='titolo-a'><p>" + response.message + " mode ON...</p></div><div class='container-fluid' id='body-amm'></div>";
                        $("#app").html(amm);
                        import("./amm.js");
                    } else {
                        var risp = "<div class='container-fluid' id='titolo-u'><h3>Welcome back " + response.message + "!</h3></div><div class='container-fluid' id='contenuti'></div>";
                        $("#app").html(risp);
                        import("./home.js");
                    }
                } else {
                    var risposta = "<div class='container-fluid' id='titolo2'><p>" + response.message + "</p></div>";
                    $("#app").html(risposta);
                    import("./registrati.js");
                }
            })
            .fail(function (xhr, resp, text) {
                console.log(text);
                var err = "<div class='container-fluid'><p>Something went wrong ops</p></div>";
                $("#app").html(err);
            });
        return false;

    });
})