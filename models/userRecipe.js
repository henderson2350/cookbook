const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class userRecipe extends Model {}

userRecipe.init(
  {
    userId: {
      type: DataTypes.INTEGER,
    },
    recipeId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "userRecipe",
  }
);

module.exports = userRecipe;
