const fs = require('fs');;
const path = require('path');
const mongoose = require("mongoose");
const config = require('../../configs');

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(config.db.mongoDb.MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to Mongoo DB Cloud !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

//InitiateMongoServer()
const db = {
    categorys: null,
    events: null,
    talents: null,
    teams: null,
    users: null,
    user_coins: null,
    user_friends: null,
    user_notifications: null,
    user_talents: null
};

fs.readdirSync(__dirname).filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
    let model = require(path.join(__dirname, file))
    db[model.collection.collectionName] = model
});



module.exports = db;

