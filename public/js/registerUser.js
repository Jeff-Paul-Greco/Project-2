$("#submit-registration").on("click", function(event) {
  event.preventDefault();

  let newUser = {
    username: $("#username-text").val().trim(),
    password: $("#password-text").val().trim(),
    // firstName: $("#firstName").val().trim(),
    // lastName:$("#lastName").val().trim(),
    // userName: $("#username").val().trim(),
    // password: $("#password").val().trim(),
  };
  console.log(newUser);

  $.post("/api/newUser", newUser).then(function(data) {
    console.log(data);
    alert("Pending registration..");
  });

  $("#firstname").val("");
  $("#lastname").val("");
  $("#username").val("");
  $("#password").val("");
});
