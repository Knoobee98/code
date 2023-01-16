
module.exports = (sequelize, DataTypes) => {
  const carts = sequelize.define('carts', {
    products_id: DataTypes.INTEGER,
    users_id: DataTypes.UUID,
  }, {})
  
  return carts;
};