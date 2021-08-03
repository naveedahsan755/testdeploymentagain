const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Testimonial = sequelize.define("Testimonial", {
  clientName: {
    type: DataTypes.STRING,
  },
  testimonial: {
    type: DataTypes.STRING,
  },
});

module.exports = Testimonial;
