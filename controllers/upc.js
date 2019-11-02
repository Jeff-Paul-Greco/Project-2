require("dotenv").config();
var axios = require("axios");

const upcKey = process.env.UPC_KEY; // api key to upcdatabase.org


var upc = {
  lookup: function(barcode, cb) {
    var url = `https://api.upcdatabase.org/product/${barcode}?apikey=${upcKey}`;
    axios.get(url).then(function(response) {
      if (response.status === 200) {
        console.log(response.data);
        if (response.data.title) {
          item = response.data.title;
        } else {
          item = "Item not found.";
        }
      } else {
        item = "Invalid Request";
      }
      cb(item);
    });
  }
};

module.exports = upc;
