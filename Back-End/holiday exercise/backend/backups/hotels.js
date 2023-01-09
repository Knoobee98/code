
module.exports = (sequelize, DataTypes) => {
  const hotels = sequelize.define('hotels', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  })

  hotels.associate = function(models){
    hotels.hasMany(models.hotels_images, {
      foreignKey: 'hotels_id'
    }),

    hotels.hasMany(models.hotels_rooms, {
      foreignKey: 'hotels_id'
    })
  }
  return hotels;
};

// name: DataTypes.STRING,
//     location: DataTypes.STRING