const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: { 
      type: dataTypes.INTEGER,
      allowNULL: false,
      primaryKey: true,
      autoIncrement: true
    },
   product_id: {
    type: dataTypes.INTEGER,
    references: {
    model: 'Product',
    key: 'id'
      }
  },
   tag_id: {
    type: dataTypes.INTEGER,
    references: {
    model: 'Tag',
    key: 'id'
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
