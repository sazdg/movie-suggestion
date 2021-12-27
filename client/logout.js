$(document).ready(function(){
    $(document).on("click", "#logout", function(){
        $.ajax({
            url:"http://localhost/cime/movie-suggestion/server/api/logout.php",
            dataType:"json"
        })
        .done(function(response){
            alert(response.message);
            location.reload();
        })
        .fail(function(xhr, resp, text){
            console.log(xhr, resp, text);
        });
        return false;
    });
})