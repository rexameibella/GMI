'use strict';
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_detail', {
    userdetailid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    birthdate: DataTypes.DATE,
    jk : DataTypes.STRING,
    address : DataTypes.STRING,
    userid : DataTypes.INTEGER
  }, {
    tableName: 'user_detail',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
};

//userdetailid	birthdate	jk	address	created_at	updated_at