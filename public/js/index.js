const express = require('express');
const database = require('./../../config/config.json')
app.get('/', function(err,res){
  res.render('/register', {title: "DoomsDay Preppers Sign-Up"})
});

app.post('/register', function(req,res,proceed){
  
const user = req.body.username
const pass = req.body.password
const pass2 = req.body.password2
con.query('INSERT INTO users (username, password, password2) VALUES(?,?,?)', [user, pass, pass2], function(err,res,fields){

if(err) throw err;
// return to registration pg </?>
res.render('/register', {title: "THANK YOU FOR REGISTERING YOU MAY NOW LOGIN"})

})
  res.render('/register', {title: "THANK YOU FOR REGISTERING"})
});

