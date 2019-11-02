require("dotenv").config();
var db = require("../models");
var axios = require("axios");
//var Users = require('../models/users');

const upcKey = process.env.UPC_KEY; // api key to upcdatabase.org

function upcLookup(barcode) {
  var url = `https://api.upcdatabase.org/product/${barcode}?apikey=${upcKey}`;
  axios
    .get(url)
    .then(function (response) {
      if (response.status === 200) {
        if (response.data.description) {
          return response.data.description;
        } else {
          return "Item description not found.";
        }
      } else {
        return "Invalid Request";
      }
    });
}

module.exports = function (app) {
  // post for barcode lookup
  app.post("/api/search", function (req, res) {
    let barcode = req.body.barcode;
    var item = upcLookup(barcode);
    res.json(item);
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

  // Getting all users in the db
  app.get("/api/:users?", function (req, res) {
    if(req.params.users){
      Users.findAll({}).then(function(res){
        res.json(res)
      }
    }
    });


  // Creating a new user (acct registration)
  app.post("/api/newUser", function (req, res) {
     let user = req.body;
     Users.create({
       username: user.username,
       password: user.password
     })

    })

}
