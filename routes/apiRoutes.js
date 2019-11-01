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
