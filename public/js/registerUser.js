// const express = require('express');
// const database = require('./../../config/config.json')
// app.get('/', function(err,res){
//   res.render('/register', {title: "DoomsDay Preppers Sign-Up"})
// });

// app.post('/register', function(req,res,proceed){

// const user = req.body.username
// const pass = req.body.password
// const pass2 = req.body.password2
// con.query('INSERT INTO users (username, password, password2) VALUES(?,?,?)', [user, pass, pass2], function(err,res,fields){

// if(err) throw err;
// // return to registration pg </?>
// res.render('/register', {title: "THANK YOU FOR REGISTERING YOU MAY NOW LOGIN"})

// })
//   res.render('/register', {title: "THANK YOU FOR REGISTERING"})
// });

// this file should be users.js and should have the
// on click for registering

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
