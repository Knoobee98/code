module.exports = (sequelize, DataTypes) => {
  const users_address = sequelize.define('users_address', {
    receiver: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.INTEGER
  }, {});

  //relasi users_address ke users
  users_address.associate = function(models){
   users_address.belongsTo(models.users, {
      foreignKey: 'users_id'
   })
  }

  return users_address
}

