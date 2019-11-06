module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      is: /^[a-z]+$/i,
      len:{
        args: [5,15],
        msg: "Username must be between 5 and 15 characters"
      }
    }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:{
          args: [5,15],
          msg: "Password must be between 5 and 15 characters"
        }
      
        }, 
      
    },
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
