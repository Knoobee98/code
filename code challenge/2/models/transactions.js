
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('transactions', {
    travel_name: DataTypes.STRING,
    schedule_date: DataTypes.DATEONLY,
    total_prices: DataTypes.INTEGER,
    total_seat: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Waiting For Payment'
    }
  })

  transactions.associate = function(models){
    transactions.belongsTo(models.users, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    }),

    transactions.belongsTo(models.seats, {
      foreignKey: 'seats_id',
    })
  }
  return transactions;
};

// travel_name: DataTypes.STRING,
// total_seat: DataTypes.INTEGER,
// seat_number: DataTypes.STRING,
// total_prices: DataTypes.INTEGER