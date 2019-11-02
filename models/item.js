module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: { min:0 },
      len: [1]
    },
    wishlist: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    barcode: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Item.associate = function(models) {
    // We're saying that a Item should belong to an User
    // A Item can't be created without an User due to the foreign key constraint
    Item.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Item;
};

