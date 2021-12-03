// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Categories.hasMany(Products, {
  foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(ProductTag, {
  foreignKey: 'tag_id'
});

// Tags belongToMany Products (through ProductTag)
Tags.belongToMany(Products, {
  foreignKey: 'tag_id'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
