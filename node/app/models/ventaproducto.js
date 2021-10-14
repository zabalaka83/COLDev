'use strict';
module.exports = (sequelize, DataTypes) => {
  const VentaProducto = sequelize.define('VentaProducto', {
    Cantidad: DataTypes.INTEGER,
    Estado: DataTypes.STRING
  }, {});
  VentaProducto.associate = function(models) {
    // associations can be defined here
  };
  return VentaProducto;
};