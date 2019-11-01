var Users = require('../models/users');

module.exports = function(app){

  // adding a user to the db 
  app.post("/api/newUser", function(req,res){

    // <?> is lines 9-14 the same thing as 16- just using sequelize?
  //   let dbQuery = "INSERT INTO users (username, password, token) VALUES (?,?,?)"
  //   connection.query(dbQuery, [req.body.username, req.body.password, req.body.token], function(err,res){
  //     if(err) throw err;
  //     console.log("User successfully added")
  //     res.end();
  //   })
  // })
let user = req.body;

//adding users to db using sequelize 

Users.create({
  
  username : user.username,
  password : user.password
})

res.status(204).end()

  })

  //get all users in the db

  app.get("/api/:users?", function(req,res){
    if(req.params.users){
    Users.findAll({}).then(function(res){
      res.json(res);
    })
  }
})


}