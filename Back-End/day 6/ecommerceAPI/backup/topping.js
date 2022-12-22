
module.exports = (sequelize, DataTypes) => {
  const topping = sequelize.define("topping", {
    name: DataTypes.STRING,
    }, {})

  topping.associate = function(models){
    topping.belongsToMany(models.products_detail, {
      through: "products_topping",
    })
  }
  
  return topping;
};