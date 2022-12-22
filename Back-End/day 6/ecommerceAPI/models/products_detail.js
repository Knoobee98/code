
module.exports = (sequelize, DataTypes) => {
  const products_detail = sequelize.define('products_detail', {
    calories: DataTypes.INTEGER,
  }, {})

  products_detail.associate = function(models){
    products_detail.belongsTo(models.products, {
      foreignKey: 'products_id',
    })

    products_detail.belongsToMany(models.size, {
      through: 'products_size'
    })

    products_detail.belongsToMany(models.topping, {
      through: 'products_topping'
    })

  }

  return products_detail;
};