$(document).ready(function () {
    //index app
    var app = `
    <div class="container">
    <h3 class="d-flex justify-content-center" >Movie Recommendation Engine</h3>
    <img src="./img/cinema3.jpg" alt="cinema" width="100%">
    </div>
    <div class="container" id="content"></div>`;
    //home page sia per loggati che non.
    $("#app").html(app);

    //controllare se esistono dei cookie di sessione, appena si apre la pagina
    checkSession();

    function checkSession() {
        $.ajax({
            url: "http://localhost/cime/movie-suggestion/server/api/login.php",
            type: "GET",
            dataType: "json"
        })
            .done(function (response) {
                console.log(response.message);
                //se l'utente esiste == è registrato
                if (response.esiste == true) {
                    //display button welcome, enter
                    var welcome = `<div class="container d-flex justify-content-center">
                    <button type="button" class="btn btn-primary" id="entra">Vai alla tua pagina</button>
                    </div>`;
                    $("#content").html(welcome);
                } else {
                    //display buttons login and register
                    var log = `<div class="container d-flex justify-content-center">
                    <button type="button" class="btn btn-primary" id="login">Login</button>
                    <button type="button" class="btn btn-primary" id="registrazione">Registrati</button><br/>
                    </div>`;
                    $("#content").html(log);
                }
            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
            });
    }

    $(document).on("click", "#entra", function () {
        $.ajax({
            url: "http://localhost/cime/movie-suggestion/server/api/login.php",
            type: "GET",
            dataType: "json"
        })
            .done(function (response) {
                if (response.utente == "amministratore") {
                    var x = "<div class='d-flex justify-content-center'><h3>Movie Recommendation Engine</h3></div><div class='container' id='titolo-a'></div>";
                    $("#app").html(x);
                    import("./amm.js");

                } else {
                    var x = "<div class='d-flex justify-content-center'><h3>Movie Recommendation Engine</h3></div><div class='container' id='titolo-u'></div>";
                    $("#app").html(x);
                    import("./home.js");
                }
            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
            });
        return false;
    });


    $(document).on("click", "#login", function () {
        var form = `
    <div class="container">
    <h3 class="d-flex justify-content-center">Movie Recommendation Engine</h3>
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
                <button type="button" class="btn btn-primary" id="registrazione"> Vai alla  registrazione </button>
            </div>
            <div class="containers">
                <a href="index.html">Torna alla home</a>
            </div></div>`;

        $("#app").html(form);
    });


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
                    console.log("info sessione " + response.infosessione);

                    if (response.utente == "amministratore") {
                        var amm = "<div class='container-fluid'><p>" + response.message + " mode ON...</p></div><div id='titolo-a'></div>";
                        $("#app").html(amm);
                        import("./amm.js");
                    } else {
                        var risp = "<div class='container-fluid' id='titolo-u'><h3>Welcome back " + response.message + "!</h3></div><div id='titolo-u'></div>";
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