const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const BusinessCard = sequelize.define("BusinessCard", {
  ownerName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  website: {
    type: DataTypes.STRING,
  },
});

module.exports = BusinessCard;
