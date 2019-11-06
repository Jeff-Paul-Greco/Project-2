window.localStorage.setItem("loggedIn", "false"); // default to not logged in.


$(document).ready(function () {

  $("#login-btn").on("click", function (event) {
    event.preventDefault();

    var username = $("#username")
      .val()
      .trim();
    var password = $("#password")
      .val()
      .trim();

    var body = {
      username: username,
      password: password
    }
    console.log(body);

    $.ajax({
      url: "/login",
      data: body,
      method: "POST",
      success: function(response){
        console.log(response);
        window.localStorage.setItem("userId", response.userId) // sets the local storage for the user
        window.localStorage.setItem("loggedIn", "true"); // sets the local storage to being logged in.
        $("#login-invalid").empty(); // if invalid creds pops up, this just empties before redirecting
        window.location = "/inventory"; // this sends us to the inventory page after being logged in.
      },
      error: function(response){
        $("#login-invalid").text("Invalid Credentials");
      }

    });
  });

  $("#inventory").hide()

  $(".acct-controls-div").hide()




});
