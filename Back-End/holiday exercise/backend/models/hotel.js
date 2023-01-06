
module.exports = (sequelize, DataTypes) => {
  const hotel = sequelize.define('hotel', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    location: DataTypes.STRING
  })

  hotel.associate = function(models){
    hotel.hasMany(models.room, {
      foreignKey: 'hotelId'
    })
  }
  return hotel;
};