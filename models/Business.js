const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const User = require('./User');
const BusinessCard = require('./BusinessCard');
const Testimonial = require('./Testimonial');

const Business = sequelize.define('Business', {
  // name: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
  // address: {
  //   type: DataTypes.STRING
  // },
  // picture: {
  //   type: DataTypes.STRING
  // },
  // video: {
  //   type: DataTypes.STRING
  // },
  // about: {
  //   type: DataTypes.TEXT
  // },
  link: {
    type: DataTypes.STRING
  },
  varifiedBy: {
    type: DataTypes.INTEGER
  }
});

// Business.hasOne(User, { onDelete: 'cascade' });
// User.belongsTo(Business);

Business.hasOne(BusinessCard);
BusinessCard.belongsTo(Business);

Business.hasMany(Testimonial);
Testimonial.belongsTo(Business);

module.exports = Business;
