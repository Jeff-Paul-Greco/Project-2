// place this at the bottom of every page except inventory, if placed on inventory it causes a loop.
// it does this because each time the page renders, this code would run, the way the route is setup
// it will constantly loop.
// when the user clicks on the inventory link, a GET request is used to retrieve the webpage
// the issue we have is that we need to send a POST to get specific user data
// the code below will submit a hidden form that will retrieve the specific data the user requires.

var username = window.localStorage.getItem("username");
var userId = window.localStorage.getItem("userId");

$("#inventory").on("click", function (event) {
    event.preventDefault();
    
    if (username && userId) {
        $("#username-inventory").val(username);
        $("#userId-inventory").val(userId);
        $("#hidden-inventory-form").submit();
    }
})

