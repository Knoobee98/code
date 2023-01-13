
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    main_image: DataTypes.STRING
  })

  products.associate = function(models){
    products.hasMany(models.products_images, {
      foreignKey: 'products_id',
    })
  }
  return products;
};

    // name: DataTypes.STRING,
    // price: DataTypes.INTEGER,
    // stock: DataTypes.INTEGER  