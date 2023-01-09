
module.exports = (sequelize, DataTypes) => {
  const hotels_room_image = sequelize.define('hotels_room_image', {
    url: DataTypes.STRING
  })

  hotels_room_image.associate = function(models){
    hotels_room_image.belongsTo(models.hotels_rooms, {
      foreignKey: 'hotelsrooms_id'
    })
  }
  return hotels_room_image;
};
// url: DataTypes.STRING