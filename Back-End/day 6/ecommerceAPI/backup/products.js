module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define("products",
    {
      name: DataTypes.STRING,
    },{}
  );

  //untuk relasi products ke products_address
  products.associate = function (models) {
    products.hasOne(models.products_detail, {
      foreignKey: "product_id",
    })

    products.belongsTo(models.category, {
      foreignKey: "category_id",
    })
  };

  return products;
};
