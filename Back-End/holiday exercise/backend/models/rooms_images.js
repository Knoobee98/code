
module.exports = (sequelize, DataTypes) => {
  const rooms_images = sequelize.define('rooms_images', {
    url: DataTypes.STRING,
  });

  rooms_images.associate = function(models){
    rooms_images.belongsTo(models.hotels_rooms, {
      foreignKey: 'roomsImages_id'
    })
  }
  return rooms_images;
};
// url: DataTypes.STRING