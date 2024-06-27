// Import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 
});

// Categories have many Products
Category.hasMany(Product, {
  through: {
    model: Trip,
    unique: false
  },
  as: 'planned_trips'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Traveler, {
  through: {
    model: Trip,
    unique: false
  },
  as: 'product_travelers'
});

// Tags belongToMany Products (through ProductTag)
Location.belongsToMany(Traveler, {
  through: {
    model: Trip,
    unique: false
  },
  as: 'location_travelers'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
