
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  })
  return products;
};

    // name: DataTypes.STRING,
    // price: DataTypes.INTEGER,
    // stock: DataTypes.INTEGER  