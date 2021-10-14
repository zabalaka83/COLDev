'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define('Clientes', {
    Cedula: DataTypes.INTEGER,
    Nombre: DataTypes.STRING,
    Direccion: DataTypes.STRING,
    Telefono: DataTypes.INTEGER,
    correo: DataTypes.INTEGER
  }, {});
  Clientes.associate = function(models) {
    // associations can be defined here
  };
  return Clientes;
};