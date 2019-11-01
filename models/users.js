let Sequelize = require('sequelize');
let sequelize = require('../config/connection');

const Users = sequelize.define('Users', {

  // should probably add first and last name or email fields 
 
  email: {
    type: Sequelize.STRING,
    allowNull: false

  },
  username: {
    type: Sequelize.STRING,
      primaryKey : true,
      allowNull: false
  },

  password : {
    type: Sequelize.STRING,
    allowNull: false
 },

 token: {
   type: Sequelize.STRING,
 }
});

Users.sync();
module.exports = Users;