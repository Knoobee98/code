
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transaction', {
    qty: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    expired: DataTypes.DATE,
    status: DataTypes.STRING
  }, {})

  transaction.associate = function(models){
    transaction.belongsTo(models.room, {
      foreignKey: 'roomId'
    }),
    transaction.belongsTo(models.users, {
      foreignKey: 'users_id'
    })
  }
  
  return transaction;
};

// qty: DataTypes.INTEGER,
//     price: DataTypes.INTEGER,
//     expired: DataTypes.DATE,
//     status: DataTypes.STRING