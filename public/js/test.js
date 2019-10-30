$(document).ready(function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();

    var username = $("#username")
      .val()
      .trim();
    var password = $("#password")
      .val()
      .trim();

    console.log(username);
    console.log(password);
  });
});
