'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_topping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products_topping.init({
    products_id: DataTypes.INTEGER,
    topping_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products_topping',
  });
  return products_topping;
};