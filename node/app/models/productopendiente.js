'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductoPendiente = sequelize.define('ProductoPendiente', {
    cantidad: DataTypes.INTEGER
  }, {});
  ProductoPendiente.associate = function(models) {
    // associations can be defined here
    
  };
  return ProductoPendiente;
};