
module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('room', {
    type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    BookedFrom: DataTypes.DATE,
    BookedTo: DataTypes.DATE
  }, {})

  room.associate = function(models){
    room.belongsTo(models.hotel, {
      foreignKey: 'hotelId'
    })
    room.hasMany(models.images, {
      foreignKey: 'roomId'
    })
  }

  return room;
};
// type: DataTypes.STRING,
//     price: DataTypes.INTEGER,
//     BookedFrom: DataTypes.DATE,
//     BookedTo: DataTypes.DATE