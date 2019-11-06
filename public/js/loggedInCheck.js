$(document).ready(function(){

    if (window.localStorage.getItem("loggedIn") === "true") {
        // if user is logged in, hide login/register, and show the other two
        $("#search").show();
        $("#inventory").show();
    
        $("#login").hide();
        $("#register").hide();
    } else {
        // if the user is not logged in, hide inventory and item lookup.
        $("#search").hide();
        $("#inventory").hide();
    
    }
})
