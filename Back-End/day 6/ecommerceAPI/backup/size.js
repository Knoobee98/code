
module.exports = (sequelize, DataTypes) => {
  const size =sequelize.define("size", {
    name: DataTypes.STRING,
    }, {})

    size.associate = function(models){
      size.belongsToMany(models.products_detail, {
        through: "products_size",
      })
    }
  return size;
};