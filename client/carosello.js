$(document).ready(function(){
    
    showCarousel();

});

function showCarousel() {
    var x = "Ancora nulla";
    $("#history").html(x);

    $.ajax({
        url: "http://localhost/cime/movie-suggestion/server/api/carosello.php",
        type: "GET",
        dataType: "json"
    })
        .done(function (response) {
            x = "<ul class='list-group'>";
            for (var i = 0; i < response.length; i++) {
                x += "<li class='list-group-item list-group-item-action list-group-item-dark'>" + response[i] + "</li>";

            }
            x += "</ul";
            $("#history").html(x);
        })
        .fail(function (xhr, resp, text) {
            console.log("nessun carosello.js");
        });
    return false;
};