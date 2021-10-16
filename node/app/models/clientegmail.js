'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClienteGmail = sequelize.define('ClienteGmail', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  ClienteGmail.associate = function(models) {
    // associations can be defined here
  };
  return ClienteGmail;
};