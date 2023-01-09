
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('transactions', {
    hotel_name: DataTypes.STRING,
    hotel_location: DataTypes.STRING,
    room_price: DataTypes.INTEGER,
    room_name: DataTypes.STRING,
    total_room: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    checkIn: DataTypes.DATEONLY,
    checkOut: DataTypes.DATEONLY,
    expired_date: DataTypes.DATEONLY,
    status: DataTypes.DATEONLY
  }, {})

  transactions.associate = function(models){
    transactions.belongsTo(models.users, {
      foreignKey: 'users_id'
    })

    transactions.belongsTo(models.hotels_rooms, {
      foreignKey: 'hotels_rooms_id'
    })
  }
  return transactions;
};
// hotel_name: DataTypes.STRING,
//     hotel_location: DataTypes.STRING,
//     room_price: DataTypes.INTEGER,
//     room_name: DataTypes.STRING,
//     total_room: DataTypes.INTEGER,
//     total_price: DataTypes.INTEGER,
//     checkIn: DataTypes.DATEONLY,
//     checkOut: DataTypes.DATEONLY,
//     expired_date: DataTypes.DATEONLY,
//     status: DataTypes.DATEONLY