'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ventas = sequelize.define('Ventas', {
    Fecha: DataTypes.DATE,
    Estado: DataTypes.STRING,
    Total: DataTypes.DOUBLE
  }, {});
  Ventas.associate = function(models) {
    // associations can be defined here
  };
  return Ventas;
};