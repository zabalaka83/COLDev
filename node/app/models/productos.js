'use strict';
module.exports = (sequelize, DataTypes) => {
  const Productos = sequelize.define('Productos', {
    nombre: DataTypes.STRING,
    precio: DataTypes.DOUBLE,
    stock: DataTypes.INTEGER
  }, {});
  Productos.associate = function(models) {
    // associations can be defined here
  };
  return Productos;
};