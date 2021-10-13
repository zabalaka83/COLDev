'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empleado = sequelize.define('Empleado', {
    name: DataTypes.STRING,
    apellido: DataTypes.STRING,
    cedula: DataTypes.INTEGER,
    telefono: DataTypes.INTEGER,
    correo: DataTypes.STRING,
    pass: DataTypes.STRING
  }, {});
  Empleado.associate = function(models) {
    // associations can be defined here
    Empleado.belongsTo(models.Rol, { as: "rol", foreignKey: "rol_id" });
  };
  return Empleado;
};