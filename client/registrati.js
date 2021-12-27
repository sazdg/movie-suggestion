$(document).ready(function () {

    //HTML REGISTRAZIONE FORM
    var reg = `
    <div class="container">
            <h3>Pagina di registrazione</h3>

            <div class="container-fluid">
                <form method="post" action="registrati.php">
                    Nome:<br />
                    <input type="text" name="nome" id="nome" required><br />
                    Email:<br />
                    <input type="text" name="email" id="email" required><br />
                    Password:<br />
                    <input type="password" name="password" id="pass" required><br />
                    <input type="submit" class="btn btn-primary" value="Registrati!" id="send">
                </form>
            </div>

            <div class="container">
                <a href="index.html">Torna alla home</a>
            </div>
        </div>`;

    //click sul bottone registrazione
    //link per tornare alla home index page
    $(document).on("click", "#registrazione", function () {
        $("#app").html(reg);
    });

    //se login false, mostra la pagina registrazione
    $("#titolo2").append(reg);

    //send dati registrazione a registrazione.php
    $(document).on("click", "#send", function () {
        var registrati = {
            nome: $("#nome").val(),
            email: $("#email").val(),
            password: $("#pass").val()
        };

        let registratiJson = JSON.stringify(registrati);

        $.ajax({
            url: "http://localhost/cime/movie-suggestion/server/api/registrazione.php",
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: registratiJson,
        })
            .done(function (response) {
                var risultati = "<div class='container-fluid'><p>" + response.message + "</p";
                risultati += "<br/><br/><a href='index.html'>Torna alla homepage per fare il login!</a></div>";
                $("#app").html(risultati);
            })
            .fail(function (xhr, resp, text) {
                console.log(text);
                var ops = "<div class='container-fluid'><p>" + response.message + "</p>";
                ops += "<br/><br/><button type='button' id='registrazione'>RIPROVA</button></div>";
                $("#app").html(ops);
            });
        return false;

    });

})
