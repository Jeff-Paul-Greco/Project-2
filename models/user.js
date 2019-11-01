module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
      primaryKey : true
  },

  password : {
    type: DataTypes.STRING,
 },

 token: {
   type: DataTypes.STRING,
 }
});

  User.associate = function(models) {
    // Associating User with Items
    // When an User is deleted, also delete any associated Items
    User.hasMany(models.Item, {
      onDelete: "cascade"
    });
  };

  return User;
};

