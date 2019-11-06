loggedIn = false;


$(document).ready(function(){
    if (loggedIn === false){
        // if the user is not logged in, hide inventory and item lookup.
        $("#search").hide();
        $("#inventory").hide();
    }
})



