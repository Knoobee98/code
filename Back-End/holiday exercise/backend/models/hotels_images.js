
module.exports = (sequelize, DataTypes) => {
  const hotels_images = sequelize.define('hotels_images', {
    url: DataTypes.STRING
  })

  hotels_images.associate = function(models){
    hotels_images.belongsTo(models.hotels, {
      foreignKey: 'hotels_id'
    })
  }
  return hotels_images;
};
// url: DataTypes.STRING