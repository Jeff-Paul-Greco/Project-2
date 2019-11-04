require("dotenv").config();
var db = require("../models");
var upc = require("../controllers/upc.js");
var User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

process.env.SECRET_KEY = 'secret'


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

  // Getting all users in the db
  app.get("/api/users", function(req, res) {
   // if (req.params.user) {
      User.findAll({})
      .then(function(results) {
        res.json(results);
      });
  //  }
  });

  // Creating a new user (acct registration)
  user.post("/newUser", function(req, res) {
  
    const userData = {

      username: req.body.username,
      password: req.body.password,
     
    }

    User.findOne({ 
      where: {
        username: req.body.username
      }
    }).then(user => {
      if(!user){

        const hash = bycrpt.hashSync(userData.password, 10)
        userData.password = hash
        User.create(userData)
        .then(user => {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {expiresIn: 1550
        })

        res.json({ token : token})
      }).catch(err =>{
        res.send('error:'+ err)
      })
    }
    else {
      res.json({ error: "We're sorry this user already exists"})
    }
  }).catch(err=>{
      res.send('error' + error)
    })
})

}
