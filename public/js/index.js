const express = require('express');

app.get('/', function(err,res){
  res.render('index', {title: "DoomsDay Preppers Sign-Up"})
});

app.post('/register', function(req,res,proceed){
  
  req.body.username;
  req.body.password;
  req.body.password2;
  res.render('index', {title: "THANK YOU FOR REGISTERING"})
});