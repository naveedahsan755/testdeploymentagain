const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  //   'postgres://cnjqyhlh:UjxgpDUN-LisiJugvQFmDKqzZ7xp3Y3v@chunee.db.elephantsql.com/cnjqyhlh'
  // );

  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'postgres'
  }
);

module.exports = sequelize;
