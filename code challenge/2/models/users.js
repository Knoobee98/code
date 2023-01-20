const {UUIDV4} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  })

  users.associate = function(models){
    users.belongsToMany(models.seats, {
      as: 'seats',
      through: {
        model: 'transactions',
        unique: false
      },
      foreignKey: 'user_id'

    })
  }
  return users;
};

// username: DataTypes.STRING,
// email: DataTypes.STRING,
// password: DataTypes.STRING,
// role: DataTypes.STRING