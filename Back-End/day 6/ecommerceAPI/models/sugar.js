
module.exports = (sequelize, DataTypes) => {
  const sugar = sequelize.define('sugar', {
    name: DataTypes.STRING,
  })

  return sugar;
};