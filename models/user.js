module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      is: /^[a-z]+$/i
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
  indexes: [
      {
          unique: true,
          fields: ['username']
      }
  ]
});


  User.associate = function (models) {
    // Associating User with Items
    //  When an User is deleted, also delete any associated Items
    User.hasMany(models.Item, {
      onDelete: "cascade"
    });
  };

  return User;
};
