$(document).ready(function () {

    showTable();

    function showTable() {
        $.ajax({
            url: "http://localhost/cime/movie-suggestion/server/api/table.php",
            type: "GET",
            dataType: "json"
        })
            .done(function (response) {
                var tabella = `
                    <table class="table table-hover table-bordered table-dark">
                        <thead><tr>
                        <th scope="col">Title</th>
                        <th scope="col">Year</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Mood</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Delete</th>
                        </tr></thead><tbody>`;
                
                for(let i = 0; i < response.movie.length; i++){
                    tabella += "<tr><td>" + response.movie[i].titolo + "</td><td>" + response.movie[i].anno + "</td><td>" + response.movie[i].genere + "</td><td>" + response.movie[i].mood + "</td><td>" + response.movie[i].rating + "</td><td><button type='button' class='btn btn-danger btn-sm' id='deleteMovie' data-title='" + response.movie[i].titolo + "'>X</button></td></tr>";
                }   
    
                tabella += "</tbody></table>";

                //console.log("funziona la chiamata ajax tabella.js");
                //console.log(response.message);
                $("#table").append(tabella);
            })
            .fail(function (xhr, resp, text) {
                console.log(xhr, resp, text);
            });
        return false;
    }

})