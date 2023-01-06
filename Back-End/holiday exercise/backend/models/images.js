
module.exports = (sequelize, DataTypes) => {
  const images = sequelize.define('images', {
    url: DataTypes.TEXT,
  })

  images.associate = function(models){
    images.belongsTo(models.room, {
      foreignKey: 'roomId'
    })
  }
  
  return images;
};