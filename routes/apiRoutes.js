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
  app.post("/api/items", function(req, res) {
    let userId = req.body.userId; // this ensures we only retrieve the logged in user's items.
    db.Item.findAll({where:{UserId: userId}}).then(function(dbItems) {
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

  // Creating a new user (acct registration)
  app.post("/api/newUser", function(req, res) {
    let user = req.body;
    console.log(user);
    db.User.create({
      username: user.username,
      password: user.password
    }).then(function(response){
      console.log(response);
      res.status(204).redirect("/login");
    });
    
  });
};
