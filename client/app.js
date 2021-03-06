$(document).ready(function () {
    //index app
    showApp();

    $(document).on("click", "#entra", function () {
        $.ajax({
            url: "http://localhost/cime/movie-suggestion/server/api/login.php",
            type: "GET",
            dataType: "json"
        })
            .done(function (response) {
                if (response.utente == "amministratore") {
                    var x = "<div class='container' id='titolo-a'></div>";
                    $("#app").html(x);
                    //import("./amm.js");
                    showAmm();

                } else {
                    var x = "<div class='container' id='titolo-u'></div>";
                    $("#app").html(x);
                    //import("./home.js");
                    showHome();
                }
            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
            });
        return false;
    });


    $(document).on("click", "#login", function () {
        var form = `<div class="p-5">
            <div class="container-fluid d-flex justify-content-center border border-white rounded-3 p-4">
                <form>
                    Nome<br />
                    <input type="text" name="nome" id="nome"><br />
                    Password<br />
                    <input type="password" name="password" id="pass"><br />
                    <button type="button" class="btn btn-primary" id="loggati"> Login </button>
                </form>
            </div><br/>


            <div class="container-fluid d-flex justify-content-center p-3">
                <p class="d-flex align-items-center justify-content-center m-0">Registrati per salvare la lista dei tuoi film!</p>
                </div>
            <div class="container-fluid d-flex justify-content-center">
                <button type="button" class="btn btn-primary" id="registrazione"> Vai alla  registrazione </button>
            </div>


            <div class="container d-flex justify-content-center p-5">
                <button type="button" class="btn btn-outline-primary" onclick="showApp()">Torna alla home</button>
            </div></div>
            </div>`;

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
                        var amm = "<div class='container' id='titolo-a'></div>";
            
                        $("#app").html(amm);
                        //import("./amm.js");
                        showAmm();

                    } else {
                        var risp = "<div class='container' id='titolo-u'></div>";
                        $("#app").html(risp);
                        //import("./home.js");
                        showHome();
                    }
                } else {
                    var risposta = "<div class='container-fluid' id='titolo2'><p>" + response.message + "</p></div>";
                    $("#app").html(risposta);
                    import("./registrati.js");
                }
            })
            .fail(function (xhr, resp, text) {
                console.log(text);
                console.log("errore in app.js #loggati");
                var err = "<div class='container-fluid'><p>Something went wrong ops</p></div>";
                $("#app").html(err);
            });
        return false;

    });
});

function checkSession() {
    $.ajax({
        url: "http://localhost/cime/movie-suggestion/server/api/login.php",
        type: "GET",
        dataType: "json"
    })
        .done(function (response) {
            console.log(response.message);
            //se l'utente esiste == ?? registrato
            if (response.esiste == true) {
                //display button welcome, enter
                var welcome = `<div class="container d-flex justify-content-center p-5">
                    <button type="button" class="btn btn-primary" id="entra">Vai alla tua pagina</button>
                    <button type="button" class="btn btn-outline-danger" id="logout">Logout</button></div>
                    </div>`;
                $("#content").html(welcome);
            } else {
                //display buttons login and register
                var log = `<div class="container d-flex justify-content-center p-4 pb-5">
                    <button type="button" class="btn btn-primary btn-lg" id="login">Login</button>
                    <button type="button" class="btn btn-primary btn-lg" id="registrazione">Registrati</button>
                    </div>`;
                $("#content").html(log);
            }
        })
        .fail(function (xhr, resp, text) {
            console.log(xhr, resp, text);
        });
};

function showApp(){

    var foto = `
    <div class="container" id="content"></div>
    <img src="./img/cinema3.jpg" alt="cinema" class="img-fluid" id="fotoHome">`;
    //home page sia per loggati che non.
    $("#app").html(foto);

    //controllare se esistono dei cookie di sessione, appena si apre la pagina
    checkSession();

}