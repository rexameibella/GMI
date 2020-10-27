'use strict';
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    userid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nameuser: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
};

// userid	nameuser	birthdate	jk	address	created_at	updated_at