require("dotenv").config();
var axios = require("axios");

const upcKey = process.env.UPC_KEY; // api key to upcdatabase.org


var upc = {
  lookup: function(barcode, cb) {
    var url = `https://api.upcdatabase.org/product/${barcode}?apikey=${upcKey}`;
    axios.get(url).then(function(response) {
      if (response.status === 200) {
        if (response.data.description) {
          item = response.data.description;
        } else {
          item = "Item description not found.";
        }
      } else {
        item = "Invalid Request";
      }
      cb(item);
    });
  }
};

module.exports = upc;
