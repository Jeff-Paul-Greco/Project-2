require("dotenv").config();
var db = require("../models");
var upc = require("../controllers/upc.js");
//var Users = require('../models/users');

module.exports = function(app) {
  // post for barcode lookup
  app.post("/api/search", function(req, res) {
    var barcode = req.body.barcode;
    // the below passes the barcode for upc lookup, then runs a callback function.
    upc.lookup(barcode, function() {
      console.log(res);
      var data = { data: item };
      console.log(data);
      res.json(data);
    });
  });

  // Get all items
  app.get("/api/items", function(req, res) {
    db.Item.findAll({}).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // Create a new item
  app.post("/api/items", function(req, res) {
    db.Item.create(req.body).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // Delete an item by id
  app.delete("/api/items/:id", function(req, res) {
    db.Item.destroy({ where: { id: req.params.id } }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // Update an item by id
  app.put("/api/items/:id", function(req, res) {
    db.Item.update({ wishlist: false }, { where: { id: req.params.id } }).then(
      function(dbItem) {
        res.json(dbItem);
      }
    );
  });

  // Getting all users in the db
  app.get("/api/users", function(req, res) {
      db.User.findAll({}).then(function(response) {
        res.json(response);
      });
  });

  // Creating a new user (acct registration)
  app.post("/api/newUser", function(req, res) {
    let user = req.body;
    console.log(user);
    db.User.create({
      username: user.username,
      password: user.password
    });
  });
};
