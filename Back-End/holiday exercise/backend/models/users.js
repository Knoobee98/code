
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,

  }, {})

  users.associate = function(models){
    users.hasMany(models.transactions, {
      foreignKey: 'userId'
    })
  }


  return users;
};