var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get('/', function(err,res){
    res.render('index', {title: "DoomsDay Preppers Sign-Up"})
  });
  
  app.post('/register', function(req,res,proceed){
    
    req.body.username;
    req.body.password;
    req.body.password2;
    res.render('index', {title: "THANK YOU FOR REGISTERING"})
  });

  // Load inventory page
  app.get("/inventory", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("inventory", {
        example: dbExamples
      });
    });
  });

  // Load search page
  app.get("/search", function(req, res) {
      res.render("search", {
      });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
