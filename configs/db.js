module.exports = {
  landing_page: {
    host: 'localhost',
    port: '3306',
    database: 'landing_page',
    username: 'root',
    password: '',
    dialect: "mariadb"
  },
  mongoDb : {
   MONGOURI : `mongodb+srv://${process.env.mongoRexa}:${process.env.mongoPassword}@cluster0.ecaav.mongodb.net/${process.env.mongoDBName}?retryWrites=true&w=majority`
  }
};
