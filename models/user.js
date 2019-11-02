module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    token: {
      type: DataTypes.STRING,
    }
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
