require("dotenv").config();
var db = require("../models");
var upc = require("../controllers/upc.js");
//var Users = require('../models/users');

module.exports = function (app) {
  // post for barcode lookup
  app.post("/api/search", function (req, res) {
    item = ''
    var barcode = req.body.barcode;
    // the below passes the barcode for upc lookup, then runs a callback function.
    upc.lookup(barcode, function(){ 
      console.log(res)
      var data = {data: item}
      console.log(data);
      res.json(data);  
    })
  });

  // Get all items
  app.get("/api/items", function (req, res) {
    db.Item.findAll({}).then(function (dbItems) {
      res.json(dbItems);
    });
  });

  // Create a new item
  app.post("/api/items", function (req, res) {
    db.Item.create(req.body).then(function (dbItem) {
      res.json(dbItem);
    });
  });

  // Delete an item by id
  app.delete("/api/items/:id", function (req, res) {
    db.Item.destroy({ where: { id: req.params.id } }).then(function (dbItem) {
      res.json(dbItem);
    });
  });

  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  //app.post("/api/newUser", function (req, res) {

  // <?> is lines 9-14 the same thing as 16- just using sequelize?
  //   let dbQuery = "INSERT INTO users (username, password, token) VALUES (?,?,?)"
  //   connection.query(dbQuery, [req.body.username, req.body.password, req.body.token], function(err,res){
  //     if(err) throw err;
  //     console.log("User successfully added")
  //     res.end();
  //   })
  // })
  // let user = req.body;

  //adding users to db using sequelize 

  // Users.create({

  //   username: user.username,
  //   password: user.password
  // })

  // res.status(204).end()

  //})

  //get all users in the db

  //app.get("/api/:users?", function (req, res) {
  //  if (req.params.users) {
  //    Users.findAll({}).then(function (res) {
  //      res.json(res);
  //    })
  //  }
  //})

}
