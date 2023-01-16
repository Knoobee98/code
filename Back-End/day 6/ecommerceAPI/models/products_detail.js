
module.exports = (sequelize, DataTypes) => {
  const products_detail = sequelize.define('products_detail', {
    calories: DataTypes.INTEGER,
  }, {})

  products_detail.associate = function(models){
    products_detail.belongsTo(models.products, {
      foreignKey: 'products_id',
      onDelete: 'cascade',
    })

    products_detail.belongsToMany(models.size, {
      through: 'products_size',
      onDelete: 'cascade',
    })

    products_detail.belongsToMany(models.topping, {
      through: 'products_topping',
      onDelete: 'cascade',
    })

  }

  return products_detail;
};