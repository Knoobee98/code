
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('transactions', {
    hotel_name: DataTypes.STRING,
    hotel_location: DataTypes.STRING,
    room_name: DataTypes.STRING,
    total_room: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    check_in: DataTypes.DATEONLY,
    check_out: DataTypes.DATEONLY,
    expired_date: DataTypes.DATE,
    status: DataTypes.STRING
  });

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
