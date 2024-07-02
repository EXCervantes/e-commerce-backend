// Import dependencies of sequelize library and our database connection
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Initialize Category model and set up fields and rules for Category model
class Category extends Model { }

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
