
module.exports = (sequelize, DataTypes) => {
  const products_images = sequelize.define('products_images', {
    path: DataTypes.STRING
  })

  
  return products_images;
};
// path: DataTypes.STRING