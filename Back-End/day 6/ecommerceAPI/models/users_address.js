module.exports = (sequelize, DataTypes) => {
  const users_addresses = sequelize.define('users_addresses', {
    receiver: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.INTEGER
  }, {});

  //relasi users_address ke users
  users_addresses.associate = function(models){
   users_addresses.belongsTo(models.users, {
      foreignKey: 'users_id'
   })
  }

  return users_addresses
}

