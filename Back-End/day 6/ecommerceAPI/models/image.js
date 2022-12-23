
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    url: DataTypes.STRING,
  })

  image.associate = function(models){
    image.belongsTo(models.products, {
      foreignKey: 'products_id'
    })
  }
  return image;
};