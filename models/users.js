let Sequelize = require('sequelize');
let sequelize = require('../config/connection');

const Users = sequelize.define('Users', {

  // should probably add first and last name fields 
  username: {
    type: Sequelize.STRING,
      primaryKey : true
  },

  password : {
    type: Sequelize.STRING,
 },

 token: {
   type: Sequelize.STRING,
 }
});

Users.sync();
module.exports = Users;