const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const BusinessCard = require('./BusinessCard');
const Testimonial = require('./Testimonial');

const Business = sequelize.define('Business', {
  link: {
    type: DataTypes.STRING
  },
  varifiedBy: {
    type: DataTypes.INTEGER
  }
});

Business.hasOne(BusinessCard);
BusinessCard.belongsTo(Business);

Business.hasMany(Testimonial);
Testimonial.belongsTo(Business);

module.exports = Business;
