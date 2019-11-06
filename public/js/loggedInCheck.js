$(document).ready(function(){

    if (window.localStorage.getItem("loggedIn") === "true") {
        // if user is logged in, hide login/register, and show the other three
        $("#search").show();
        $("#inventory").show();
        $("#logout").show();

        $("#login").hide();
        $("#register").hide();
        
    } else {
        // if the user is not logged in, hide inventory, item lookup, and logout.
        $("#search").hide();
        $("#inventory").hide();
        $("#logout").hide();
    }
})
