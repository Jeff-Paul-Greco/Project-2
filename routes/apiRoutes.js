require("dotenv").config();
var db = require("../models");
var axios = require("axios");

const upcKey = process.env.UPC_KEY; // api key to upcdatabase.org

function upcLookup(barcode) {
  var url = `https://api.upcdatabase.org/product/${barcode}?apikey=${upcKey}`;
  axios
    .get(url)
    .then(function(response) {
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

module.exports = function(app) {
  // post for barcode lookup
  app.post("/api/search", function(req, res) {
    let barcode = req.body.barcode;
    var item = upcLookup(barcode);
    res.json(item);
  });

  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
