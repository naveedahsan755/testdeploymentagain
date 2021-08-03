const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Chat = sequelize.define("Chat", {
  to: {
    type: DataTypes.STRING,
  },
  from: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING,
  },
});

module.exports = Chat;
