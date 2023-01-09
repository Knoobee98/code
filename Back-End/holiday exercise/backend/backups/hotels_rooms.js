
module.exports = (sequelize, DataTypes) => {
  const hotels_rooms = sequelize.define('hotels_rooms', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    total_rooms: DataTypes.INTEGER
  })

  hotels_rooms.associate = function(models){
    hotels_rooms.belongsTo(models.hotels, {
      foreignKey: 'hotels_id'
    }),

    hotels_rooms.hasMany(models.hotels_room_image, {
      foreignKey: 'hotelsrooms_id'
    }),

    hotels_rooms.belongsToMany(models.users, {
      as: 'users',
      through: {
        model: 'transactions',
        unique: false
      },
      foreignKey: 'hotels_rooms_id'
    })
  }
  return hotels_rooms;
};