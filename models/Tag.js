// Import dependencies of sequelize library and our database connection
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Initialize Tag model and set up fields and rules for Tag model
class Tag extends Model { }

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
