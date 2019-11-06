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
    db.User.findAll({
      where: { username: username }
    }).then(function (dbItem) {
      if (dbItem.length === 0) {
        console.log("No entry");
        res.status(401).send("No User Account Exists");
      } else {
        var dbPass = dbItem[0].password;
        var dbId = dbItem[0].id;
        console.log(dbId);
        if (dbPass === password) {
          console.log("password matches");
          var response = { status: "login success", userId: dbId }
          res.json(response);
        } else {
          console.log("password doesn't match");
          res.status(401).send("Invalid Credentials.");
        }

      }
    }).catch(function (err) {
      console.log(err);
      res.status(401);
    });
  });

  app.get("/register", function (err, res) {
    res.render("register")
  });

  // Creating a new user (acct registration)
  app.post("/register", function (req, res) {
    let user = req.body;
    console.log(user);
    db.User.create({
      username: user.username,
      password: user.password
    }).then(function (response) {
      console.log(response);
      res.status(204).redirect("/login");
    }).catch(function (err) {
      if (err.errors[0].path === "password") {
        res.render("register", { "register-err-msg": err.errors[0].message })
      } else if (err.errors[0].path === "users_username") {
        res.render("register", { "register-err-msg": "User with same name already exists." })
      } else {
        res.render("register", { "register-err-msg": "Bad Request." })
      }
    });

  });

  // Load inventory page
  app.post("/inventory", function (req, res) {
    console.log(req.body);
    var userId = req.body.userId;
    db.Item.findAll({ where: { UserId: userId } }).then(function (dbItems) {
      res.render("inventory", {
        items: dbItems
      });
    });
  });

  // Load search page
  app.get("/search", function (req, res) {
    res.render("search", {});
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
