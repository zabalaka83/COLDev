'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venta = sequelize.define('Venta', {
    Fecha: DataTypes.DATE,
    Estado: DataTypes.STRING,
    Total: DataTypes.DOUBLE
  }, {});
  Venta.associate = function(models) {
    // associations can be defined here
  };
  return Venta;
};