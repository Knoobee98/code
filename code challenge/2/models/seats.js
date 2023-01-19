
module.exports = (sequelize, DataTypes) => {
  const seats = sequelize.define('seats', {
    bookfrom: DataTypes.STRING,
    bookto: DataTypes.STRING,
    price: DataTypes.INTEGER,
    total_seat: DataTypes.INTEGER,
    available_seat: DataTypes.INTEGER
  })

  seats.associate = function(models){
    seats.belongsTo(models.bus, {
      foreignKey: 'bus_id',
    })

    seats.belongsToMany(models.users, {
      as: 'users',
      through: {
        model: 'transactions',
        unique: false
      },
      foreignKey: 'seats_id'
    })
    
    
  }

  return seats;
};

// from: DataTypes.STRING,
// to: DataTypes.STRING,
// price: DataTypes.INTEGER,
// total_seat: DataTypes.INTEGER,
// available_seat: DataTypes.INTEGER