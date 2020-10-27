'use strict';
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ticket', {
    ticketid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userid: DataTypes.INTEGER
  }, {
    tableName: 'ticket',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: true, 
  });
};
