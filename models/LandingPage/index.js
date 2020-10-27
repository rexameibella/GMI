'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../configs');

const db = {
  // UserOrder: null,
  // UserAuditTrail: null,
  merchantOrder: null,
  users: null,
  user_detail: null,
  ticket: null,
  // softdeleteTicket:null
};

const sequelize = new Sequelize(
  config.db.landing_page.database,
  config.db.landing_page.username,
  config.db.landing_page.password,
  {
    host: config.db.landing_page.host,
    dialect: config.db.landing_page.dialect,
    driver: 'mssql',
    dialectOptions: {
      options: {
        requestTimeout: 150000
      }
    },
    logging: false,
    pool: {
      max: 200,
      min: 0,
      acquire: 30000,
      idle: 10000,
    }
  }
);

Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};

fs.readdirSync(__dirname).filter(function (file) {
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
  var model = require(path.join(__dirname, file))(sequelize, Sequelize)

  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Associations
// db.UserOrder.hasMany(db.UserOrderRoute, { foreignKey: 'UserOrderID' });

module.exports = db;
