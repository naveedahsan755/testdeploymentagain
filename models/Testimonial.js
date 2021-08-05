const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Testimonial = sequelize.define('Testimonial', {
  username: {
    type: DataTypes.STRING
  },
  testimonial: {
    type: DataTypes.STRING
  }
});

module.exports = Testimonial;
