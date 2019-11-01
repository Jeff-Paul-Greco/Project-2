let Sequelize = require('sequelize');
let sequelize = require('../config/connection');

const Users = sequelize.define('Users', {

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