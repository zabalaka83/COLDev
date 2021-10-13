'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define('Rol', {
    name: DataTypes.STRING
  }, {});
  Rol.associate = function(models) {
    // associations can be defined here
    Rol.hasMany(models.Empleado, { as: "rol", foreignKey: "rol_id" });
  };
  return Rol;
};