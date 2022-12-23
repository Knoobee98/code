
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('transactions', {
    total: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    status: DataTypes.STRING,
  })

  transactions.associate = function(models){

  }
  
  return transactions;
};