
module.exports = (sequelize, DataTypes) => {
  const stores = sequelize.define('stores', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
  })

  stores.associate = function(models){
    
  }
  
  return stores;
};