'use strict';
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('merchantOrder', {
    userid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: DataTypes.STRING,
    company: DataTypes.STRING,
    email: DataTypes.STRING,
    industry: DataTypes.INTEGER,
    phone: DataTypes.STRING,
  }, {
    tableName: 'merchantOrder',
    timestamps: true,
    createdAt: 'CreatedDate',
    updatedAt: 'ModifiedDate'
  });
};
