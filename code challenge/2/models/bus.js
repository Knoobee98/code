
module.exports = (sequelize, DataTypes) => {
  const bus = sequelize.define('bus', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    bus: DataTypes.STRING
  })

  bus.associate = function(models){
    bus.hasMany(models.seats, {
      foreignKey: 'bus_id',
    })
  }
  return bus;
};

// bus: DataTypes.STRING