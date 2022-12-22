
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
  }, {})

  products.associate = function(models){
    products.hasOne(models.products_detail, {
      foreignKey: 'products_id',
    })

    products.belongsTo(models.category, {
      foreignKey: 'category_id',
      })
      
  }

  return products;
};