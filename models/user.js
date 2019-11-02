const User = sequelize.define('Users', {

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

User.associate = function(models) {
  // Associating User with Items
 //  When an User is deleted, also delete any associated Items
   User.hasMany(models.Item, {
    onDelete: "cascade"
  });
};

User.sync();
module.exports = User;


  