const { UUIDV4 } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        unique: {
          args: true,
          msg: 'username already use!'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {msg: 'email already registered!'}
      },
      unique: {
        args: true,
        msg: 'email address already use!'
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING,

  }, {})

  users.associate = function(models){
    users.belongsToMany(models.hotels_rooms, {
      as: 'hotels_rooms',
      through: {
        model: 'transactions',
        unique: false
      },
      foreignKey: 'users_id'
    })
  }


  return users;
};