var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (err, res) {
    res.render("index", { title: "DoomsDay Preppers Sign-Up" });
  });

  app.get("/login", function (err, res) {
    res.render("index", { title: "DoomsDay Preppers Sign-Up" });
  });

  // authenticating user
  app.post("/login", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    db.User.findOne({
      where: { username: username }
    }).then(function (dbItem) {
      var dbPass = dbItem.password;
      var dbId = dbItem.id;
      console.log(dbId);
      if (dbPass === password) {
        console.log("password matches");
        var response = { status: "login success", userId: dbId }
        console.log(response);
        res.json(response);
      } else {
        console.log("password doesn't match");
        var response = { status: "invalid login"}
        res.status(401).json(response);
      }
    });
  });

  app.get("/register", function (err, res) {
    res.render("register")
  });

  app.post("/register", function (req, res, proceed) {
    req.body.username;
    req.body.password;
    req.body.password2;
    res.render("index", { title: "THANK YOU FOR REGISTERING" });
  });

  // Load inventory page
  app.get("/inventory", function (req, res) {
    db.Item.findAll({}).then(function (dbItems) {
      res.render("inventory", {
        items: dbItems
      });
    });
  });

  // Load search page
  app.get("/search", function (req, res) {
    res.render("search", {});
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
