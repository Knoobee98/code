
module.exports = (sequelize, DataTypes) => {
  const products_images = sequelize.define('products_images', {
    path: DataTypes.STRING
  })

  products_images.associate = function(models){
    products_images.belongsTo(models.products, {
      foreignKey: 'product_id',
    })
  }
  return products_images;
};
// path: DataTypes.STRING